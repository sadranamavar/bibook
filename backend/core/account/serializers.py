from rest_framework import serializers
from account.models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "password",
            "first_name",
            "last_name",
            "email",
            "birthday",
            "liked",
            "saved",
        ]
        read_only_fields = ["id", "liked", "saved"]

    def validate_username(self, value):
        if "@" in str(value):
            raise serializers.ValidationError(
                "username field contains an illegal character"
            )
        return value

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return validated_data


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "birthday",
            "image_url",
            "liked",
            "saved",
            "email",
            "username",
        ]
        read_only_fields = ["id", "liked", "saved", "email", "username"]


class UserProfile(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["image_url", "username"]


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()
