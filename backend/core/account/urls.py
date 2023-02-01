from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from account.views import CreateUser, ProfileUser, DeleteUser, UpdateUser, ChangePassword, ResetPassword, VerifyEmail


urlpatterns = [
    # jwt
    path('jwt/create/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('jwt/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jwt/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # user model url
    path('signup', CreateUser.as_view(), name='signup'),
    path('update', UpdateUser.as_view(), name='update'),
    path('delete', DeleteUser.as_view(), name='delete'),
    path('user/<str:username>', ProfileUser.as_view(), name='profile'),
    path('change-password', ChangePassword.as_view(), name='change_password'),
    path('verify', VerifyEmail.as_view(), name='verify email'),
    path('reset-password', ResetPassword.as_view(), name='reset password')
]