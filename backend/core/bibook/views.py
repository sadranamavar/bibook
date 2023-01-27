from django.shortcuts import render
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from bibook.serializers import BookSerializer, CategorySerializer
from bibook.models import Book, Category
from comment.models import Comment
from comment.serializers import CommentSerializer

# Create your views here.


class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @action(methods=['post', 'get'], detail=True, url_path='like', url_name='like')
    def like(self, request, pk=None):
        book = self.get_object()
        book.liked += 1
        book.save()
        return Response({'status': 200})

    @action(methods=['post', 'get'], detail=True, url_path='save', url_name='save')
    def save(self, request, pk=None):
        book = self.get_object()
        book.saved += 1
        book.save()
        return Response({'status': 200})

    @action(methods=['get'], detail=True, url_path='get-comments', url_name='get-comment')
    def get_comment(self, request, pk=None):
        comment = Comment.objects.filter(book=pk)
        comment = CommentSerializer(comment, many=True)
        return Response(comment.data)

    @action(methods=['post'], detail=True, url_path='add-comment', url_name='add-comment', permission_classes=[permissions.IsAuthenticated])
    def add_comment(self, request, pk=None):
        comment = request.data
        comment['book'] = pk
        comment['user'] = request.user.id
        serializer = CommentSerializer(data=comment)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class CategoryView(ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
