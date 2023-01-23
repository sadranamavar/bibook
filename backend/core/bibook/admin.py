from django.contrib import admin
from bibook.models import Book,Category

# Register your models here.

admin.site.register(Category)
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    exclude = ['deleted']