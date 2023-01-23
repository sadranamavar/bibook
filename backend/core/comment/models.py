from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Comment (models.Model):
    user = models.ForeignKey("account.User", verbose_name=_(
        "user"), on_delete=models.CASCADE)
    book = models.ForeignKey("bibook.Book", verbose_name=_(
        "book"), on_delete=models.CASCADE)
    text = models.TextField(_("text"))

    class Meta:
        verbose_name = _("comment")
        verbose_name_plural = _("comments")

    def __str__(self):
        return f"{self.book}_{self.user}_{self.text}"

