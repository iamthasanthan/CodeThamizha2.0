# Generated by Django 3.2.6 on 2021-09-07 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customuser', '0005_alter_customuser_points'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='profile_pic',
            field=models.ImageField(blank=True, default='profile_pics/default.jpg', null=True, upload_to='profile_pics/'),
        ),
    ]
