from django.contrib import admin
from bibook.models import Book,Category,Comment

# Register your models here.

admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Comment)