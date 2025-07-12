from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from portfolio_data.views import SummaryViewSet, EducationViewSet, WorkExperienceViewSet, CertificationViewSet, ProjectViewSet, SkillViewSet
from django.http import HttpResponse

router = DefaultRouter()
router.register(r'summary', SummaryViewSet)
router.register(r'education', EducationViewSet)
router.register(r'experience', WorkExperienceViewSet)
router.register(r'certifications', CertificationViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)


def home(request):
    return HttpResponse("Django API is running. Visit the frontend at http://localhost:5173.")

urlpatterns = [
    path('', home, name='home'),  # Add root URL
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]