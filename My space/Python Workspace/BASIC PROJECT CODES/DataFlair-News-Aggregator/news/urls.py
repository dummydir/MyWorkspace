from django.urls import path
from news.views import scrape, news_list

urlpatterns = [
	path('scrape/', views.scrape, name="scrape"),
	path('', views.news_list, name="home"),
]