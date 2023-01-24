from django.urls import path
from rest_framework import routers
from bibook.views import BookView

router = routers.SimpleRouter()
router.register(r'', BookView)

urlpatterns = router.urls
