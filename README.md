# ecommerce_ONEDAO

{
"info": {
"\_postman_id": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
"name": "Node.js API with PostgreSQL",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
"description": "Postman collection for the Node.js + Express + PostgreSQL RESTful API"
},
"item": [
{
"name": "Authentication",
"item": [
{
"name": "Register User",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"name\": \"John Doe\",\n \"email\": \"john@example.com\",\n \"password\": \"password123\",\n \"phone\": \"1234567890\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/auth/register",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"auth",
"register"
]
}
},
"response": []
},
{
"name": "Verify OTP",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"userId\": 1,\n \"otp\": \"123456\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/auth/verify-otp",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"auth",
"verify-otp"
]
}
},
"response": []
},
{
"name": "Login",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"email\": \"john@example.com\",\n \"password\": \"password123\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/auth/login",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"auth",
"login"
]
}
},
"response": []
},
{
"name": "Resend OTP",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"userId\": 1\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/auth/resend-otp",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"auth",
"resend-otp"
]
}
},
"response": []
}
]
},
{
"name": "Products",
"item": [
{
"name": "Get All Products",
"request": {
"method": "GET",
"header": [
{
"key": "Authorization",
"value": "Bearer {{auth_token}}"
}
],
"url": {
"raw": "{{base_url}}/api/v1/products?page=1&limit=10&sortBy=created_at&sortOrder=DESC",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"products"
],
"query": [
{
"key": "page",
"value": "1"
},
{
"key": "limit",
"value": "10"
},
{
"key": "sortBy",
"value": "created_at"
},
{
"key": "sortOrder",
"value": "DESC"
}
]
}
},
"response": []
},
{
"name": "Create Product",
"request": {
"method": "POST",
"header": [
{
"key": "Authorization",
"value": "Bearer {{auth_token}}"
}
],
"body": {
"mode": "raw",
"raw": "{\n \"name\": \"Premium Coffee\",\n \"description\": \"Arabica coffee beans\",\n \"price\": 12.99\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/products",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"products"
]
}
},
"response": []
},
{
"name": "Get Single Product",
"request": {
"method": "GET",
"header": [
{
"key": "Authorization",
"value": "Bearer {{auth_token}}"
}
],
"url": {
"raw": "{{base_url}}/api/v1/products/1",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"products",
"1"
]
}
},
"response": []
},
{
"name": "Update Product",
"request": {
"method": "PUT",
"header": [
{
"key": "Authorization",
"value": "Bearer {{auth_token}}"
}
],
"body": {
"mode": "raw",
"raw": "{\n \"name\": \"Premium Coffee Updated\",\n \"description\": \"Arabica coffee beans from Ethiopia\",\n \"price\": 14.99\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "{{base_url}}/api/v1/products/1",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"products",
"1"
]
}
},
"response": []
},
{
"name": "Delete Product",
"request": {
"method": "DELETE",
"header": [
{
"key": "Authorization",
"value": "Bearer {{auth_token}}"
}
],
"url": {
"raw": "{{base_url}}/api/v1/products/1",
"host": [
"{{base_url}}"
],
"path": [
"api",
"v1",
"products",
"1"
]
}
},
"response": []
}
]
},
{
"name": "Health Check",
"item": [
{
"name": "Health Check",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "{{base_url}}/health",
"host": [
"{{base_url}}"
],
"path": [
"health"
]
}
},
"response": []
}
]
}
],
"variable": [
{
"key": "base_url",
"value": "http://localhost:3000"
},
{
"key": "auth_token",
"value": "your_jwt_token_here"
}
]
}
