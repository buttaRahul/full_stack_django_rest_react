from django.db import models

# Create your models here.

class Todo(models.Model):
    title =  models.CharField(max_length = 50)
    date = models.DateTimeField(auto_now_add = True)
    completed = models.BooleanField(default = False)





