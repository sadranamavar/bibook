from rest_framework import serializers
from bibook.models import Book, Category


class CategoryListingField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id':value.id, 'title':value.title}


class BookSerializer(serializers.ModelSerializer):
    category = CategoryListingField(many=True, read_only=True)

    class Meta:
        model = Book
        fields = ["id", "title", "author", "translator", "about", "language", "length",
                  "publisher", "file_format", "file_size", "file_url", "category"]
        read_only_fields = ["view", "liked", "saved", "download"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
