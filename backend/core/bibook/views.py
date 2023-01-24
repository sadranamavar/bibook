from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from bibook.serializers import BookSerializer
from bibook.models import Book

# Create your views here.


class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer
