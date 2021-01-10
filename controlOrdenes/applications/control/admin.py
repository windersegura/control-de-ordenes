from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Catalogo)
admin.site.register(CompraDetalle)