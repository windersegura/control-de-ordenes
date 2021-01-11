from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.db.models import FieldDoesNotExist
from .models import *
from rest_framework import permissions, status, mixins,generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, ProductoSerializer, \
    MarcaSerializer, CatalogoSerializer

# Create your views here.


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)



class UserList(APIView):

    permissions_classes = (permissions.AllowAny)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

        


class ProductoCreateAPIView(generics.CreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer



class ProductoListAPIView(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = self.queryset
        try:
            catalogo = self.request.query_params.get('catalogo', None)
            queryset = Producto.objects.filter(catalogo__id = catalogo)
        except FieldDoesNotExist:
            queryset = Producto.objects.none()
        return queryset


class ProductoUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class ProductoDestroyAPIView(generics.DestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class MarcaListAPIView(generics.ListAPIView):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer




class CatalogoListAPIView(generics.ListAPIView):
    queryset = Catalogo.objects.all()
    serializer_class = CatalogoSerializer



    






















