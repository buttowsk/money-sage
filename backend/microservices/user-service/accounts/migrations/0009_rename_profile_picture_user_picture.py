# Generated by Django 4.2.1 on 2023-06-12 18:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_user_profile_picture'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='profile_picture',
            new_name='picture',
        ),
    ]
