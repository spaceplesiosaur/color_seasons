# Generated by Django 3.0.2 on 2020-01-08 07:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('color_seasons', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='season',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='users', to='color_seasons.Season'),
        ),
    ]