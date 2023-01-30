from django.shortcuts import render
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from bibook.serializers import BookSerializer, CategorySerializer
from bibook.models import Book, Category
from comment.models import Comment
from comment.serializers import CommentSerializer
from account.models import User

# Create your views here.


class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(methods=['post', 'get'], detail=True, url_path='like', url_name='like', permission_classes = [permissions.IsAuthenticated])
    def like(self, request, pk=None):
        book = self.get_object()
        user = request.user
        try:
            User.objects.get(id=user.id, liked__id=book.id)
            user.liked.remove(book.id)
            book.liked -=1
            status = 202

        except :
            user.liked.add(book.id)
            book.liked += 1
            status = 201
        user.save()
        book.save()
        return Response({}, status=status)

    @action(methods=['post', 'get'], detail=True, url_path='save', url_name='save', permission_classes = [permissions.IsAuthenticated])
    def save(self, request, pk=None):
        book = self.get_object()
        user = request.user
        try:
            User.objects.get(id=user.id, saved__id=book.id)
            user.saved.remove(book.id)
            book.saved -=1
            status = 202

        except :
            user.saved.add(book.id)
            book.saved += 1
            status = 201
        user.save()
        book.save()
        return Response({}, status=status)

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
