This is a project to create an e-commerce API. The database used is mySql and uses PRISMA ORM. Using the JavaSript programming language using Express js as the framework.

This API project is designed to manage an e-commerce database which includes http methods for GET, POST, PUT and DELETE to manage product data, baskets or checkout items that have been selected by the user, and for users who have registered to become sellers With API you can create a shop and sell products where you own it. Using JWT as authentication in exchanging information

# E-commerce API Documentation

Welcome to the E-commerce API documentation. This API provides access to manage E-commerce data. You can use this API to retrieve data and manage E-commerce product data.

## 1. Create User

Endpoint<br>
`POST http://localhost:3000/users` <br>
Response<br>

```json
{
  "message": "User created successfully",
  "user": {
    "id": 8,
    "username": "johnDoe",
    "fullname": "John Doe",
    "address": "123 Main St, Anytown, USA",
    "nohp": 62394780,
    "email": "johnDoe@example.com",
    "password": "$2b$10$MoE0vvJkE0o04fs8Q0L5OusRBfMvhFLc60kAXpj4XlJUjzbVA5iG6",
    "is_blocked": false,
    "roleId": 1,
    "createdAt": "2024-02-18T04:05:26.862Z",
    "updatedAt": "2024-02-18T04:05:26.862Z"
  }
}
```

## 2. Create Seller

Endpoint<br>
`POST http://localhost:3000/sellers` <br>
Response<br>

```json
{
  "message": "Registered as seller successfully",
  "shop": {
    "id": 4,
    "name": "Klinik Sport",
    "address": "123 Main St, Anytown, USA",
    "joinAt": "2024-02-18T04:19:02.587Z",
    "information": "Menyediakan alat medis olahraga",
    "userId": 8
  }
}
```

## 3. Login

Endpoint<br>
`POST http://localhost:3000/login` <br>
Response<br>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE3MDgyMzAyMjR9.uR5za8Jwdw50VXTLOd9tRBD13-uy4ZH2KFm3sH0nkGc",
  "user": {
    "id": 1,
    "email": "john.doe@example.com"
  }
}
```

## 4. Update Profile

Endpoint<br>
`PUT http://localhost:3000/users/:id` <br>
Response<br>

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": 8,
    "username": "Hardiska",
    "fullname": "Hardiska123",
    "address": "123 Main St, Anytown, USA",
    "nohp": 62394780,
    "email": "hardiska@example.com",
    "password": "$2b$10$1pPNv11knH3TgOCzyXk7xOsEf538M8HzeIJ1J.LwBhldFgtNA76IO",
    "is_blocked": false,
    "roleId": 2,
    "createdAt": "2024-02-18T04:05:26.862Z",
    "updatedAt": "2024-02-18T04:27:26.895Z"
  }
}
```

## 5. Get Shop

Endpoint<br>
`GET http://localhost:3000/shop/name?name=ID Sport 97` <br>
Response<br>

```json
{
  "id": 1,
  "name": "ID Sport 97",
  "address": "Jalan Selamat",
  "joinAt": "2024-02-12T04:13:30.021Z",
  "information": "Ini adalah toko perlengkapan bola terbesar di jogja",
  "userId": 2
}
```

## 6. Update Shop

Endpoint<br>
`PUT http://localhost:3000/shop/:id` <br>
Response<br>

```json
{
  "message": "Shop updated successfully",
  "updatedShop": {
    "id": 1,
    "name": "Indonesia Sport",
    "address": "Jalan Selamat",
    "joinAt": "2024-02-12T04:13:30.021Z",
    "information": "Ini adalah toko perlengkapan bola terbesar di jogja",
    "userId": 2
  }
}
```

## 7. Create Category

Endpoint<br>
`POST http://localhost:3000/category` <br>
Response<br>

```json
{
  "message": "Category created successfully",
  "newCategory": {
    "id": 6,
    "name": "Baju Train Lari",
    "createdAt": "2024-02-18T05:14:27.216Z",
    "updatedAt": "2024-02-18T05:14:27.216Z"
  }
}
```

## 8. Get Category

Endpoint<br>
`GET http://localhost:3000/category` <br>
Response<br>

```json
[
  {
    "id": 1,
    "name": "jersey Timnas",
    "createdAt": "2024-02-12T15:36:34.129Z",
    "updatedAt": "2024-02-14T14:04:35.968Z",
    "products": [
      {
        "id": 6,
        "name": "Jersey Timnas Trainning",
        "price": 88.5,
        "stock": 75,
        "description": "Jersey Trainning Timnas Indonesia",
        "categoryId": 1,
        "sellerId": 2,
        "createdAt": "2024-02-13T04:52:02.805Z",
        "updatedAt": "2024-02-13T04:54:28.036Z"
      }
    ]
  }
]
```

## 9. Get Category by ID

Endpoint<br>
`GET http://localhost:3000/category/:id` <br>
Response<br>

```json
{
  "id": 5,
  "name": "Jersey Basket Timnas",
  "createdAt": "2024-02-14T07:36:28.316Z",
  "updatedAt": "2024-02-14T07:36:28.316Z",
  "products": [
    {
      "id": 7,
      "name": "Jersey Basket Timnas U-20",
      "price": 99.99,
      "stock": 50,
      "description": "Jersey Basket Timnas Piala Asia U-20",
      "categoryId": 5,
      "sellerId": 2,
      "createdAt": "2024-02-14T07:44:26.013Z",
      "updatedAt": "2024-02-14T07:44:26.013Z"
    }
  ]
}
```

## 10. Update Category by

Endpoint<br>
`PUT http://localhost:3000/category/:id` <br>
Response<br>

```json
{
  "message": "Category updated successfully",
  "updatedCategory": {
    "id": 1,
    "name": "Baju Timnas Senior",
    "createdAt": "2024-02-12T15:36:34.129Z",
    "updatedAt": "2024-02-18T05:23:44.590Z"
  }
}
```

## 11. Delete Category

Endpoint<br>
`DELETE http://localhost:3000/category/:id` <br>
Response<br>

```json
{
  "message": "Category deleted successfully"
}
```

## 12. Create Product

Endpoint<br>
`POST http://localhost:3000/products` <br>
Response<br>

```json
{
  "message": "Product created successfully",
  "product": {
    "id": 63,
    "name": "Jersey Timnas Away 80",
    "price": 9.99,
    "stock": 81,
    "description": "Jersey Timnas Indonesia 1990",
    "categoryId": 1,
    "sellerId": 2,
    "createdAt": "2024-02-18T05:28:57.042Z",
    "updatedAt": "2024-02-18T05:28:57.042Z"
  }
}
```

## 13. Get Product

Endpoint<br>
`GET http://localhost:3000/products` <br>
Response<br>

```json
  {
    "id": 7,
    "name": "Jersey Basket Timnas U-20",
    "price": 99.99,
    "stock": 50,
    "description": "Jersey Basket Timnas Piala Asia U-20",
    "categoryId": 5,
    "sellerId": 2,
    "createdAt": "2024-02-14T07:44:26.013Z",
    "updatedAt": "2024-02-14T07:44:26.013Z",
    "images": [
      {
        "id": 4,
        "imageUrl": "https://example.com/sepatu_olahraga_1.jpg",
        "productId": 7,
        "createdAt": "2024-02-14T07:44:26.013Z",
        "updatedAt": "2024-02-14T07:44:26.013Z"
      },
      {
        "id": 5,
        "imageUrl": "https://example.com/sepatu_olahraga_2.jpg",
        "productId": 7,
        "createdAt": "2024-02-14T07:44:26.013Z",
        "updatedAt": "2024-02-14T07:44:26.013Z"
      }
    ]
  },
  {
    "id": 19,
    "name": "Jersey Timnas Away 56890",
    "price": 9.99,
    "stock": 81,
    "description": "Jersey Timnas Indonesia 1990",
    "categoryId": 1,
    "sellerId": 2,
    "createdAt": "2024-02-15T09:11:05.918Z",
    "updatedAt": "2024-02-15T09:11:05.918Z",
    "images": [
      {
        "id": 18,
        "imageUrl": "https://example.com/image1.jpg",
        "productId": 19,
        "createdAt": "2024-02-15T09:11:05.918Z",
        "updatedAt": "2024-02-15T09:11:05.918Z"
      }
    ]
  },
```

## 14. Get Product by ID

Endpoint<br>
`GET http://localhost:3000/products/:id` <br>
Response<br>

```json
{
  "id": 29,
  "name": "Jersey Timnas Away f90",
  "price": 9.99,
  "stock": 81,
  "description": "Jersey Timnas Indonesia 1990",
  "categoryId": 1,
  "sellerId": 2,
  "createdAt": "2024-02-15T10:29:07.876Z",
  "updatedAt": "2024-02-15T10:29:07.876Z",
  "images": [
    {
      "id": 28,
      "imageUrl": "https://example.com/image1.jpg",
      "productId": 29,
      "createdAt": "2024-02-15T10:29:07.876Z",
      "updatedAt": "2024-02-15T10:29:07.876Z"
    }
  ]
}
```

## 15. Update Product

Endpoint<br>
`PUT http://localhost:3000/products/:id` <br>
Response<br>

```json
{
  "message": "Product updated successfully",
  "updatedProduct": {
    "id": 29,
    "name": "Jersey Timnas 2024",
    "price": 9.99,
    "stock": 81,
    "description": "Jersey Timnas Indonesia 1990",
    "categoryId": 1,
    "sellerId": 2,
    "createdAt": "2024-02-15T10:29:07.876Z",
    "updatedAt": "2024-02-18T05:35:27.373Z",
    "images": [
      {
        "id": 28,
        "imageUrl": "https://example.com/image1.jpg",
        "productId": 29,
        "createdAt": "2024-02-15T10:29:07.876Z",
        "updatedAt": "2024-02-18T05:35:27.373Z"
      }
    ]
  }
}
```

## 16. Delete Product

Endpoint<br>
`PUT http://localhost:3000/products/:id` <br>
Response<br>

```json
{
  "result": {
    "message": "Product deleted successfully"
  }
}
```

## 17. Add Item to Cart

Endpoint<br>
`POST http://localhost:3000/cart/addItem`<br>
Response <br>

```json
{
  "message": "Item added to cart successfully",
  "cartItem": {
    "cartId": 1,
    "productId": 62,
    "quantity": 2,
    "total": 3000,
    "createdAt": "2024-02-18T06:02:28.410Z",
    "updatedAt": "2024-02-18T06:02:28.410Z",
    "checkOutId": null
  }
}
```

## 18. Get Item Cart

Endpoint<br>
`GET http://localhost:3000/cart/:id`<br>
Response <br>

```json
{
  "id": 1,
  "userId": 4,
  "totalItems": 4,
  "totalAmount": 3019,
  "createdAt": "2024-02-14T08:51:45.715Z",
  "updatedAt": "2024-02-18T06:05:19.585Z",
  "items": [
    {
      "cartId": 1,
      "productId": 29,
      "quantity": 2,
      "total": 19,
      "createdAt": "2024-02-18T06:05:19.083Z",
      "updatedAt": "2024-02-18T06:05:19.083Z",
      "checkOutId": null
    },
    {
      "cartId": 1,
      "productId": 62,
      "quantity": 2,
      "total": 3000,
      "createdAt": "2024-02-18T06:02:28.410Z",
      "updatedAt": "2024-02-18T06:02:28.410Z",
      "checkOutId": null
    }
  ]
}
```

## 19. Update Item to Cart

Endpoint<br>
`PUT http://localhost:3000/cart/editItem/:cartId/:productId`<br>
Response <br>

```json
{
  "message": "Cart item updated successfully",
  "cart": {
    "cartId": 1,
    "productId": 62,
    "quantity": 4,
    "total": 6000,
    "createdAt": "2024-02-18T06:02:28.410Z",
    "updatedAt": "2024-02-18T06:53:32.438Z",
    "checkOutId": null
  }
}
```

## 20. Update Item to Cart

Endpoint<br>
`DELETE http://localhost:3000/cart/deleteItem/:cartId/:productId`<br>
Response<br>

```json
{
  "message": "Cart item deleted successfully"
}
```

## 21. Check Out Item

Endpoint<br>
`POST http://localhost:3000/checkout`<br>
Response<br>

```json
{
  "message": "Checkout success",
  "newCheckout": {
    "id": 50,
    "cartId": 1,
    "productId": 29,
    "name": "Jersey Timnas 2024",
    "description": "Jersey Timnas Indonesia 1990",
    "price": 9.99,
    "quantity": 2,
    "total": 19,
    "createdAt": "2024-02-18T07:01:50.985Z",
    "updatedAt": "2024-02-18T07:01:50.985Z"
  }
}
```
