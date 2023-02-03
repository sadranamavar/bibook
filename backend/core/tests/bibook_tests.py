from django.urls import reverse
from rest_framework.test import APIClient
import pytest
from bibook.models import Book
from account.models import User


@pytest.mark.django_db
class TestBibook:
    client = APIClient()
    book_test = Book()
    book_test.title = "test"
    book_test.author = "user"
    book_test.translator = "user"
    book_test.about = "test"
    book_test.length = 1
    book_test.language = "test"
    book_test.publisher = "test"
    book_test.image_url = "1"
    book_test.file_format = "test"
    book_test.file_size = "test"
    book_test.file_url = "http://test.test"

    user_test = User()
    user_test.username = "test"
    user_test.email = "test@email.test"
    user_test.password = "test"

    def test_get_list_book_status_200(self):
        url = reverse(
            "bibook:book-list",
        )
        response = self.client.get(
            url,
        )
        assert response.status_code == 200

    def test_get_detail_book_status_200(self):
        url = reverse("bibook:book-detail", kwargs={"pk": 1})
        self.book_test.save()
        response = self.client.get(url)
        assert response.status_code == 200

    def test_get_detail_book_status_404(self):
        url = reverse("bibook:book-detail", kwargs={"pk": 1})
        response = self.client.get(url)
        assert response.status_code == 404

    def test_post_like_book_add_201(self):
        url = reverse("bibook:book-like", kwargs={"pk": 1})
        self.user_test.save()
        self.book_test.save()
        self.client.force_authenticate(
            User.objects.get(username=self.user_test.username)
        )
        response = self.client.post(url)
        self.client.logout()
        assert response.status_code == 201

    def test_post_like_book_remove_202(self):
        url = reverse("bibook:book-like", kwargs={"pk": 1})
        self.user_test.save()
        self.book_test.save()
        self.client.force_authenticate(
            User.objects.get(username=self.user_test.username)
        )
        self.client.post(url)
        response = self.client.post(url)
        self.client.logout()
        assert response.status_code == 202

    def test_post_like_book_status_400(self):
        url = reverse("bibook:book-like", kwargs={"pk": 1})
        self.book_test.save()
        response = self.client.post(url)
        assert response.status_code == 401

    def test_post_save_book_add_201(self):
        url = reverse("bibook:book-save", kwargs={"pk": 1})
        self.user_test.save()
        self.book_test.save()
        self.client.force_authenticate(
            User.objects.get(username=self.user_test.username)
        )
        response = self.client.post(url)
        self.client.logout()
        assert response.status_code == 201

    def test_post_save_book_remove_202(self):
        url = reverse("bibook:book-save", kwargs={"pk": 1})
        self.user_test.save()
        self.book_test.save()
        self.client.force_authenticate(
            User.objects.get(username=self.user_test.username)
        )
        self.client.post(url)
        response = self.client.post(url)
        self.client.logout()
        assert response.status_code == 202

    def test_post_save_book_status_401(self):
        url = reverse("bibook:book-save", kwargs={"pk": 1})
        self.book_test.save()
        response = self.client.post(url)
        assert response.status_code == 401

    def test_get_get_comment_status_200(self):
        url = reverse("bibook:book-get_comment", kwargs={"pk": 1})
        self.book_test.save()
        response = self.client.get(url)
        assert response.status_code == 200

    
