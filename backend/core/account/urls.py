from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from account.views import (
    CreateUser,
    ProfileLoginUser,
    ProfileUser,
    DeleteUser,
    UpdateUser,
    ChangePassword,
    ResetPassword,
    VerifyEmail,
    LikedBookLoginUser,
    SaveBookLoginUser,
    CustomTokenObtainPairView,
)

app_name = "account"

urlpatterns = [
    # jwt
    path(
        "jwt/create/",
        CustomTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path("jwt/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("jwt/verify/", TokenVerifyView.as_view(), name="token_verify"),
    # user model url
    path("signup", CreateUser.as_view(), name="signup"),
    path("update", UpdateUser.as_view(), name="update"),
    path("delete", DeleteUser.as_view(), name="delete"),
    path("user/<str:username>", ProfileUser.as_view(), name="profile"),
    path("user", ProfileLoginUser.as_view(), name="login_profile"),
    path("liked/", LikedBookLoginUser.as_view(), name="liked_book"),
    path("saved/", SaveBookLoginUser.as_view(), name="saved_book"),
    path("change-password", ChangePassword.as_view(), name="change_password"),
    path("verify", VerifyEmail.as_view(), name="verify_email"),
    path("reset-password", ResetPassword.as_view(), name="reset_password"),
]
