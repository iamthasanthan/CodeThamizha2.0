# Generated by Django 3.2.6 on 2021-08-13 09:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=120)),
                ('event_location', models.CharField(choices=[('Zoom', 'Zoom'), ('GoogleMeet', 'GoogleMeet'), ('Teams', 'Teams'), ('Other', 'Other')], max_length=150)),
                ('info', models.TextField()),
                ('Description', models.TextField()),
                ('EventLink', models.URLField()),
                ('Points', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=15)),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EventRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.event', verbose_name='Event')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Teacher', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Attendee')),
            ],
            options={
                'verbose_name': 'Attendee for event',
                'verbose_name_plural': 'Attendees for events',
                'unique_together': {('event', 'user')},
            },
        ),
    ]
