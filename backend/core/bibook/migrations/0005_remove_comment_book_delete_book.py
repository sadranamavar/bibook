# Generated by Django 4.1.4 on 2023-01-21 21:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_remove_user_liked_remove_user_saved'),
        ('bibook', '0004_alter_book_options_comment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='book',
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]
