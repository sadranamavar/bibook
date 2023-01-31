from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.


class SafeDelete(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted=False)


class Book(models.Model):

    # book info
    title = models.CharField(_("title"), max_length=255)
    author = models.CharField(_("author"), max_length=255)
    translator = models.CharField(
        _('translator'), max_length=255, null=True, blank=True)
    about = models.TextField(_("about"))
    length = models.IntegerField(_("length"))
    language = models.CharField(_("language"), max_length=50)
    publisher = models.CharField(_("publisher"), max_length=255)
        # image field
    def upload_to(instance, filename):
        return f'media/books_image/{filename}'
    image_url = models.ImageField(
        _("image"), upload_to=upload_to,)

    # file info
    file_format = models.CharField(_("format"), max_length=8)
    file_size = models.CharField(_("size"), max_length=8)
    file_url = models.URLField(_("link"), max_length=255)

    # system info
    created_time = models.DateTimeField(_("create_time"), auto_now_add=True)
    updated_time = models.DateTimeField(_("update_time"), auto_now=True)
    liked = models.IntegerField(_("like"), default=0)
    saved = models.IntegerField(_("save"), default=0)
    download = models.IntegerField(_("download"), default=0)
    deleted = models.BooleanField(_("delete"), default=False)

    # related link
    category = models.ManyToManyField("category", verbose_name=_("category"))

    # safe delete config
    objects = SafeDelete()

    def delete(self):
        self.deleted = 1
        self.save()

    class Meta:
        verbose_name = _("book")
        verbose_name_plural = _("books")


class Category(models.Model):
    title = models.CharField(_("title"), max_length=255)

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')

    def __str__(self):
        return self.title
