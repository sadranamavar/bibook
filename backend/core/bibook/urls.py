from django.urls import include, path
from rest_framework import routers
from bibook.views import BookView, CategoryView

book_router = routers.SimpleRouter()
book_router.register('', BookView)
category_router = routers.SimpleRouter()
category_router.register('', CategoryView)

urlpatterns = [
    path('', include(book_router.urls)),
    path('category', include(category_router.urls))
]
