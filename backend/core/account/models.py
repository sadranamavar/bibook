from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.


class User(AbstractUser):
    email = models.EmailField(
        _("email address"), blank=False, null=False, unique=True)
    birthday = models.DateField(
        _("birthday"), auto_now=False, auto_now_add=False, null=True, blank=True)
    verify = models.BooleanField(_("verify"), default=False)
    saved = models.ManyToManyField(
        "bibook.Book", verbose_name=_("save book"), related_name='book_save', blank=True)
    liked = models.ManyToManyField(
        "bibook.Book", verbose_name=_("like book"), related_name='book_like', blank=True)


class Message(models.Model):
    LEVEL = (
        ('INFO', 'info'),
        ('WARNING', 'warning'),

    )
    # message info
    level = models.CharField(choices=LEVEL, max_length=10)
    text = models.TextField(_("text"))
    user = models.ForeignKey(User, verbose_name=_(
        "user"), on_delete=models.CASCADE)

    # data info
    created_time = models.DateTimeField(_("created_time"), auto_now_add=True)
    send_time = models.DateTimeField(
        _("send_time"), auto_now=False, auto_now_add=False)
