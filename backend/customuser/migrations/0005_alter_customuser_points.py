# Generated by Django 3.2.6 on 2021-08-21 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customuser', '0004_auto_20210821_0611'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='points',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
