from rest_framework.viewsets import ModelViewSet
from .serializer import ToDoSerializer
from api.models import Todo

class ToDoViewSet(ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = Todo.objects.all()


    


