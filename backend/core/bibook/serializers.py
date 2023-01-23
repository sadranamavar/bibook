from rest_framework import serializers
from bibook.models import Book,Category


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["title", "author", "translator", "about", "language",
                  "publisher", "file_format", "file_size", "file_url", "category"]
        read_only_fields = ["view", "liked", "saved", "download"]


class CategorySerializer(serializers.ModelField):
    class Meta:
        model = Category
        field = "__all__"
