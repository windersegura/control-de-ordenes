from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse

# Create your models here.

class User(AbstractUser):
    """Modelo Vendedor."""

    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ('first_name', 'last_name', 'email', "name")
    USERNAME_FIELD = 'username'

    # TODO: Define fields here
    name = models.CharField(verbose_name='Nombre Vendedor', max_length=100)
    apellido = models.CharField(verbose_name='Apellido Vendedor', max_length=100)
    email = models.EmailField("Email", null=True, blank=True)
    direccion = models.CharField(verbose_name='Direccion Vendedor', max_length=250)
    telefono = models.CharField(verbose_name='Telefono Vendedor', max_length=50)
    
    

    def __str__(self):
        return '%s - %s - %s' % (self.name, self.apellido, self.direccion)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"id": self.id})

    class Meta:
        """Meta definition for Vendedor."""

        verbose_name = 'User'
        verbose_name_plural = 'Users'



class Marca(models.Model):
    """Modelo Marca."""

    # TODO: Define fields here
    marca = models.CharField(verbose_name='Marca', max_length=100)

    class Meta:
        """Meta definition for Marca."""

        verbose_name = 'Marca'
        verbose_name_plural = 'Marcas'

    def __str__(self):
        return '%s' % (self.marca)


class Producto(models.Model):
    """Modelo Producto."""

    # TODO: Define fields here
    nombre = models.CharField(verbose_name='Nombre Producto', max_length=100)
    precio = models.DecimalField(verbose_name='Precio Producto', max_digits=25, decimal_places=2)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)


    class Meta:
        """Meta definition for Producto."""

        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def __str__(self):
        return '%s - %s' % (self.nombre, self.precio)

        

class Catalogo(models.Model):
    """Modelo Catalogo."""

    # TODO: Define fields here
    nombre = models.CharField(verbose_name='Nombre Catalogo', max_length=100)
    tipo = models.CharField(verbose_name='Tipo Catalogo', max_length=50)
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    class Meta:
        """Meta definition for Catalogo."""

        verbose_name = 'Catalogo'
        verbose_name_plural = 'Catalogos'

    def __str__(self):
        return '%s - %s' % (self.nombre, self.tipo)






class CatalogoProducto(models.Model):
    """Modelo CatalogoProducto."""

    # TODO: Define fields here


    class Meta:
        """Meta definition for CatalogoProducto."""

        verbose_name = 'CatalogoProducto'
        verbose_name_plural = 'CatalogoProductos'
        order_with_respect_to = 'catalogo'
        unique_together = [
            ('catalogo', 'producto')
        ]

    catalogo = models.ForeignKey(Catalogo, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    

    




class CompraEncabezado(models.Model):
    """Modelo CompraEncabezado."""

    # TODO: Define fields here
    cliente = models.CharField(verbose_name='Cliente Nombre', max_length=100, null=True)
    direccion = models.CharField(verbose_name='Direccion Comprador', max_length=100)
    nit = models.CharField(verbose_name='Nit', max_length=50)
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    class Meta:
        """Meta definition for CompraEncabezado."""

        verbose_name = 'CompraEncabezado'
        verbose_name_plural = 'CompraEncabezados'

    def __str__(self):
        return '%s - %s - %s' % (self.cliente, self.direccion, self.vendedor)

class CompraDetalle(models.Model):
    """Modelo CompraDetalle."""

    # TODO: Define fields here

    compra_encabezado = models.ForeignKey(CompraEncabezado, verbose_name='Encabezado Compra', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, verbose_name='Producto', on_delete=models.CASCADE)
    catalogo = models.ForeignKey(Catalogo, verbose_name='Catalogo', on_delete=models.CASCADE)
    cantidad = models.DecimalField(verbose_name='Cantidad', max_digits=25, decimal_places=2)
    subtotal = models.DecimalField(verbose_name='Sub Total', max_digits=25, decimal_places=2)
    total = models.DecimalField(verbose_name='Total', max_digits=25, decimal_places=2)

    class Meta:
        """Meta definition for CompraDetalle."""

        verbose_name = 'CompraDetalle'
        verbose_name_plural = 'CompraDetalles'

    def __str__(self):
        return '%s - %s' % (self.subtotal - self.total)






