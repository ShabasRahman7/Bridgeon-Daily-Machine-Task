from django.urls import path
from .views import SaleCreateView, SalesReportView

urlpatterns = [
    path('sales/', SaleCreateView.as_view(), name='add-sale'),
    path('sales/report/<date>/', SalesReportView.as_view(), name='sales-report'),
]
