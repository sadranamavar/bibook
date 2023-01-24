from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from bibook.serializers import BookSerializer, CategorySerializer
from bibook.models import Book, Category

# Create your views here.


class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer


class CategoryView(ModelViewSet):
    
    queryset = Category.objects.all()
    serializer_class = CategorySerializer