from rest_framework import serializers
from comment.models import Comment


class UserUsernameField(serializers.RelatedField):
    def to_representation(self, value):
        return value.username


class CommentSerializer(serializers.ModelSerializer):
    user = UserUsernameField(read_only=True)

    class Meta:
        model = Comment
        fields = ["user", "text", "created_time"]
