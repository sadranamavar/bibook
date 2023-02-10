from rest_framework import serializers
from comment.models import Comment


class UserField(serializers.RelatedField):
    def to_representation(self, value):
        return {"profile": str(value.image_url), "title": value.username}


class CommentSerializer(serializers.ModelSerializer):
    user = UserField(read_only=True)

    class Meta:
        model = Comment
        fields = ["user", "text", "created_time"]
