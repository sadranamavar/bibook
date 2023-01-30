from redis import Redis
from random import randrange
from django.db.models import Q
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from account.serializers import UserSerializer, ChangePasswordSerializer
from account.models import User

# Create your views here.


class CreateUser(APIView):
    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(email=serializer.data['email'])
            user.set_password(data['password'])
            user.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class DeleteUser(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = User.objects.get(id=request.user.id)
        user.delete()
        return Response({}, status=204)


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
r = Redis(host='redis', port=6379, password=settings.REDIS_PASS)


class VerifyEmail(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(id=request.user.id)

        if user.verify:
            return Response({'user_stats': "already verified"})

        email = user.email
        verify_code = randrange(1000, 10000)
        r.set(str(user.email), verify_code, 75)
        message = f'verify code : \n {verify_code}'
        subject = 'verify email'
        send_mail(subject=subject, message=message,
                  from_email=settings.DEFAULT_FROM_EMAIL, recipient_list=[email])
        return Response({}, status=200)

    def post(self, request):
        user = User.objects.get(id=request.user.id)

        if user.verify:
            return Response({'user_stats': "already verified"})

        if verify_code := r.get(str(user.email)):

            if str(request.data['verify_code']) == str(verify_code.decode('ascii')):

                user.verify = True
                user.save()
                r.delete(str(user.email))

                return Response({"user": user.username, "email": user.email, "verify_status": user.verify})
            return Response({"detail": "verify_code not valid"}, status=401)
        return Response({'detail': 'verify_code not find'}, status=406)


class ResetPassword(APIView):

    def post(self, request):
        try:
            user = User.objects.get(
                Q(username=request.data['user']) | Q(email=request.data['user'])) 
            email = user.email
            verify_code = randrange(1000, 10000)
            r.set(str(user.username), verify_code, 75)
            message = f'verify code : \n {verify_code}'
            subject = 'reset password'
            send_mail(subject=subject, message=message,
                    from_email=settings.DEFAULT_FROM_EMAIL, recipient_list=[email])
            return Response({}, status=200)

        except:
            return Response({"detail": "username or email not find"}, status=401)

    def patch(self, request):
        try:
            user = User.objects.filter(
                Q(username=request.data['user']) | Q(email=request.data['user']))
            if verify_code := r.get(str(user.username)):

                if str(request.data['verify_code']) == str(verify_code.decode('ascii')):

                    user.set_password(request.data["password"])
                    user.save()
                    r.delete(str(user.username))

                    return Response({"detail":"password updated"}, status=202)
                return Response({"detail": "verify_code not valid"}, status=401)
            return Response({'detail': 'verify_code not find'}, status=406)

        except:
            return Response({"detail": "username or email not find"}, status=401)