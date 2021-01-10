from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import User,Producto,Marca


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'name', 'apellido', 'email', 'direccion', 'telefono')



class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField()
    
    def get_token(self, obj):
        jwt_playload_handler = api_settings.JWT_PLAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER 

        playload = jwt_playload_handler(obj)
        token = jwt_encode_handler(playload)

        return token 

    def create (self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.META.model(**validated_data)

        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = '__all__'
    

class ProductoSerializer(serializers.ModelSerializer):
    marca_o = MarcaSerializer(source='marca', read_only=True)
    class Meta:
        model = Producto
        fields = ('id', 'nombre', 'precio', 'marca', 'marca_o')




        
    
    