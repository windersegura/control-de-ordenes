# Generated by Django 2.2.6 on 2021-01-09 22:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('control', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='catalogo',
        ),
    ]
