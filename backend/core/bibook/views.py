from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from bibook.serializers import BookSerializer, CategorySerializer
from bibook.models import Book, Category

# Create your views here.


class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @action(methods=['post', 'get'], detail=True, url_path='like', url_name='like')
    def like(self, request, pk=None):
        book = self.get_object()
        book.liked += 1 
        book.save()
        return Response({'status':200})

    @action(methods=['post', 'get'], detail=True, url_path='save', url_name='save')
    def save(self, request, pk=None):
        book = self.get_object()
        book.saved += 1 
        book.save()
        return Response({'status':200})


class CategoryView(ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
