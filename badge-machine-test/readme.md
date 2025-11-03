### **⚙️ Task: “Simple Sales Tracker API”**

**Scenario:**

You need to build a small REST API to manage daily sales for a shop.

The goal is to record each sale and fetch daily summaries.

---

### **Requirements**

**1. Models**

Create two models:

- Product → name (char), price (float)
- Sale → product (FK), quantity (int), date (DateField)

---

**2. API Endpoints (Django REST Framework)**

Implement:

- POST /sales/ → Add a new sale

GET /sales/report/<date>/ → Return JSON like:

{

"date": "2025-10-14",

"total_sales": 3400.0,

"total_items_sold": 27,

"top_product": "Laptop"

}


**3. ORM / SQL Logic**

- Use Django ORM (not raw SQL) to:
    - Calculate total sales = sum(price × quantity)
    - Find the top-selling product (by total quantity)
- (Optional: If you finish early) write one raw SQL query that returns the top 3 products by revenue.

