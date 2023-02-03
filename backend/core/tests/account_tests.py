from rest_framework.test import APIClient
from django.urls import reverse
import pytest
from account.models import User


@pytest.mark.django_db(transaction=True)
class TestAccount:
    client = APIClient()

    def test_post_create_user_status_200(self):
        url = reverse("account:signup")
        data = {
            "username": "test",
            "password": "test",
            "email": "test@email.test",
        }
        response = self.client.post(url, data)
        assert response.status_code == 201

    def test_post_create_user_status_400(self):
        url = reverse("account:signup")
        data = {
            "username": "t@st",
            "password": "",
            "email": "test$email.test",
        }
        response = self.client.post(url, data)
        assert response.status_code == 400

    def test_post_update_user_status_200(self):
        url = reverse("account:update")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"last_name": "last_name_test"}
        self.client.force_authenticate(User.objects.get(id=user.id))
        response = self.client.post(url, data)
        self.client.logout()
        assert (
            response.status_code == 201
            and User.objects.get(id=user.id).last_name == "last_name_test"
        )

    def test_post_update_user_status_400(self):
        url = reverse("account:update")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "username"}
        self.client.force_authenticate(User.objects.get(id=user.id))
        self.client.post(url, data)
        self.client.logout()
        assert User.objects.get(username="test").username == "test"

    def test_post_update_user_status_401(self):
        url = reverse("account:update")
        response = self.client.post(url)
        assert response.status_code == 401

    def test_post_create_jwt_username_200(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test", "password": "test"}
        response = self.client.post(url, data, format="json")
        assert (
            b"refresh" in response.content and b"access" in response.content
        )

    def test_post_create_jwt_email_200(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test@email.test", "password": "test"}
        response = self.client.post(url, data, format="json")
        assert (
            b"refresh" in response.content and b"access" in response.content
        )

    def test_post_create_jwt_username_401(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test", "password": ""}
        response = self.client.post(url, data, format="json")
        assert response.status_code == 400

    def test_post_refresh_jwt_token_200(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test", "password": "test"}
        response = self.client.post(url, data, format="json")
        url = reverse("account:token_refresh")
        data = {"refresh": response.json()["refresh"]}
        response = self.client.post(url, data, format="json")
        assert response.status_code == 200 and response.json()["access"]

    def test_post_refresh_jwt_token_400(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test", "password": "test"}
        response = self.client.post(url, data, format="json")
        url = reverse("account:token_refresh")
        data = {"refresh": response.json()["access"]}
        response = self.client.post(url, data, format="json")
        assert response.status_code == 401

    def test_post_verify_jwt_token_200(self):
        url = reverse("account:token_obtain_pair")
        user = User()
        user.email, user.username = "test@email.test", "test"
        user.set_password("test")
        user.save()
        data = {"username": "test", "password": "test"}
        response = self.client.post(url, data, format="json")
        url = reverse("account:token_verify")
        data = {"token": response.json()["access"]}
        response = self.client.post(url, data, format="json")
        assert response.status_code == 200

    def test_post_verify_jwt_token_400(self):
        url = reverse("account:token_verify")
        data = {"token": "test"}
        response = self.client.post(url, data, format="json")
        assert response.status_code == 401
