from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=100)
    capital = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='countries/')
    Description = models.TextField()
    
    def __str__(self):
        return self.name

