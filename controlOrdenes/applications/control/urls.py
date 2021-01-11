from django.urls import path
from .views import current_user, UserList, ProductoCreateAPIView, ProductoListAPIView, \
    ProductoUpdateAPIView, ProductoDestroyAPIView, MarcaListAPIView, CatalogoListAPIView
    


urlpatterns = [
    path('current_user/',current_user),
    path('users/',UserList.as_view()),
    path('create-producto/', ProductoCreateAPIView.as_view()),
    path('productos/', ProductoListAPIView.as_view()),
    path('update-producto/<int:pk>', ProductoUpdateAPIView.as_view()),
    path('delete-producto/<int:pk>', ProductoDestroyAPIView.as_view()),
    path('marcas/', MarcaListAPIView.as_view()),
    path('catalogo/', CatalogoListAPIView.as_view())
]