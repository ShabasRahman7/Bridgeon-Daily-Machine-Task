from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Sale
from .serializers import SaleSerializer


class SaleCreateView(generics.CreateAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer


class SalesReportView(APIView):
    def get(self, request, date):
        sales = Sale.objects.filter(date=date)
        if not sales.exists():
            return Response({"message": "no sale in the day"})
        total_sales = 0
        total_items = 0
        product_counts = {}
        for sale in sales:
            total_sales += sale.product.price * sale.quantity
            total_items += sale.quantity
            name = sale.product.name
            product_counts[name] = product_counts.get(name, 0) + sale.quantity

        top_product = None
        if product_counts:
            top_product = max(product_counts, key=product_counts.get)

        data = {
            "date": date,
            "total_sales": total_sales,
            "total_items_sold": total_items,
            "top_product": top_product,
        }

        return Response(data)
