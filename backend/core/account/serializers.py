from rest_framework import serializers
from account.models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password',
                  'first_name', 'last_name', 'email', 'birthday', 'liked', 'saved']
        read_only_fields = ['id', 'liked', 'saved']

        def create(self, validated_data):
            validated_data.password = make_password(validated_data)
            return validated_data


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'birthday', 'profile_url', 'liked', 'saved', 'email', 'username']
        read_only_fields = ['id', 'liked', 'saved', 'email', 'username']


class UserProfile(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['profile_url', 'username']

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()
