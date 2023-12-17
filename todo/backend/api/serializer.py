from rest_framework.serializers import ModelSerializer
from api.models import Todo
class ToDoSerializer(ModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'

        