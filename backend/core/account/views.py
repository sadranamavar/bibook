from uuid import uuid4
from redis import Redis
from django.db.models import Q
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from account.models import User
from account.serializers import (
    UserSerializer,
    ChangePasswordSerializer,
    UserUpdateSerializer,
    UserProfile,
)
from account.permissions import IsUser
from bibook.models import Book
from bibook.serializers import BookSerializer
# Create your views here.


class CreateUser(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    parser_classes = [MultiPartParser, FormParser, JSONParser]


class DeleteUser(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = User.objects.get(id=request.user.id)
        user.delete()
        return Response({}, status=201)


class UpdateUser(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = UserUpdateSerializer(
            request.user,
            data=request.data,
            partial=True,
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ProfileUser(generics.RetrieveAPIView):
    serializer_class = UserProfile
    queryset = User.objects.all()
    lookup_field = "username"


class ProfileLoginUser(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        serializer = UserProfile(request.user)
        return Response(serializer.data)


class LikedBookLoginUser(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = User.objects.get(id = request.user.id)
        book = user.liked.all()
        serializer = BookSerializer(book, many=True)
        return Response(serializer.data)


class SaveBookLoginUser(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = User.objects.get(id = request.user.id)
        book = user.saved.all()
        serializer = BookSerializer(book, many=True)
        return Response(serializer.data)


class ChangePassword(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        user = User.objects.get(id=request.user.id)
        if serializer.is_valid():
            if user.check_password(serializer.data["old_password"]):
                user.set_password(serializer.data["new_password"])
                user.save()
                return Response({}, status=202)
        return Response({}, status=403)


# connect to redis
r = Redis(host="redis", port=6379, password=settings.REDIS_PASS)


class VerifyEmail(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(id=request.user.id)

        if user.verify:
            return Response({"user_stats": "already verified"})

        email = user.email
        verify_code = str(uuid4())
        r.set(f"{user.id}_{user.email}", verify_code, 600)
        message = f"verify code : \n {verify_code}"
        subject = "verify email"
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
        )
        return Response({}, status=200)

    def post(self, request):
        user = User.objects.get(id=request.user.id)

        if user.verify:
            return Response({"user_stats": "already verified"})

        if verify_code := r.get(f"{user.id}_{user.email}"):
            if str(request.data["verify_code"]) == str(
                verify_code.decode("ascii")
            ):
                user.verify = True
                user.save()
                r.delete(f"{user.id}_{user.email}")

                return Response(
                    {
                        "user": user.username,
                        "email": user.email,
                        "verify_status": user.verify,
                    }
                )
            return Response({"detail": "verify_code not valid"}, status=401)
        return Response({"detail": "verify_code not find"}, status=406)


class ResetPassword(APIView):
    def post(self, request):
        try:
            user = User.objects.get(
                Q(username=request.data["user"])
                | Q(email=request.data["user"])
            )
            email = user.email
            verify_code = str(uuid4())
            r.set(f"{user.id}_{user.username}", verify_code, 600)
            message = f"""
Hi {user.username},

There was a request to change your password!

If you did not make this request then please ignore this email.

Otherwise, please click this link to change your password:  \n http://127.0.0.1:3000/account/change-password/{user.username}/{verify_code}"""
            subject = "reset password"
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
            )
            return Response({}, status=200)

        except:
            return Response(
                {"detail": "username or email not find"}, status=401
            )

    def patch(self, request):
        try:
            user = User.objects.get(
                Q(username=request.data["user"])
                | Q(email=request.data["user"])
            )
            if verify_code := r.get(f"{user.id}_{user.username}"):
                if str(request.data["verify_code"]) == str(
                    verify_code.decode("ascii")
                ):
                    user.set_password(request.data["password"])
                    user.save()
                    r.delete(f"{user.id}_{user.username}")

                    return Response(
                        {"detail": "password updated"}, status=202
                    )
                return Response(
                    {"detail": "verify_code not valid"}, status=401
                )
            return Response({"detail": "verify_code not find"}, status=406)

        except:
            return Response(
                {"detail": "username or email not find"}, status=401
            )


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        try:
            request.data["username"] = User.objects.get(
                Q(username=request.data["username"])
                | Q(email=request.data["username"])
            ).username
        except:
            return Response({}, status=401)
        return super().post(request, *args, **kwargs)
