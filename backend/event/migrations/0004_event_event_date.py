# Generated by Django 3.2.6 on 2021-09-07 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_alter_event_event_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]