# Generated by Django 3.2.6 on 2021-09-07 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_poster',
            field=models.ImageField(blank=True, null=True, upload_to='event_poster/'),
        ),
    ]
