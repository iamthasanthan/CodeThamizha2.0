# Generated by Django 3.2.6 on 2021-08-13 17:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customuser', '0002_auto_20210813_2252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='follow',
            name='follower',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='follower', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='follow',
            name='following',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='following', to=settings.AUTH_USER_MODEL),
        ),
    ]
