# Generated by Django 2.2.6 on 2021-01-10 23:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('control', '0003_auto_20210109_2309'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='catalogo',
            field=models.ManyToManyField(blank=True, to='control.Catalogo'),
        ),
        migrations.DeleteModel(
            name='CatalogoProducto',
        ),
    ]
