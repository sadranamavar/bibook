from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.utils.translation import gettext_lazy as _
from bibook.models import SafeDelete
# Create your models here.


class UserSafeDelete(UserManager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted=False)


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
    deleted = models.BooleanField(_('delete'), default=False)

    objects = UserSafeDelete()

    def delete(self):
        self.deleted = True
        self.save()


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
