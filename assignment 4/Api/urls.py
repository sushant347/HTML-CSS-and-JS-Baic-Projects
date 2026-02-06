from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('animal_app.urls')),
    path('api/', include('country_app.urls')),
    path('api/', include('vehicles__app.urls')),
]
