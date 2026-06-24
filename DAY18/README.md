# 🚀 Angular HTTP Interceptors Assignment (DAY-18)

<div align="center">

![Angular](https://img.shields.io/badge/Angular-21-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-7-purple?style=for-the-badge)
![HTTP](https://img.shields.io/badge/HTTP-Interceptor-success?style=for-the-badge)

### 📚 Capgemini Heritage Training - Angular Assignment

</div>

---

# 📌 Project Overview

This project demonstrates the implementation of **Angular HTTP Interceptors** using Angular 21.

The application covers:

- ✅ Logging all outgoing HTTP requests
- ✅ Logging response status codes
- ✅ Measuring API response time
- ✅ Global HTTP error handling
- ✅ Automatic retry mechanism
- ✅ Toast notification service
- ✅ Error logging service
- ✅ Debug page to view all logged errors

---

# 📂 Project Structure

```
src
│
├── app
│
├── components
│   ├── Home
│   ├── Login
│   ├── Debug
│   └── Toast
│
├── services
│   ├── ApiService
│   ├── ToastService
│   └── ErrorLogService
│
├── interceptors
│   ├── LoggingInterceptor
│   ├── TimingInterceptor
│   └── ErrorInterceptor
│
├── app.routes.ts
├── app.config.ts
└── app.ts
```

---

# ✅ Assignment 1

## HTTP Logging Interceptor

### Features

✔ LoggingInterceptor

- Logs HTTP Request URL
- Logs HTTP Request Method
- Logs HTTP Response Status Code

✔ TimingInterceptor

- Calculates API response time
- Displays request completion time in milliseconds

---

## Console Output

```text
========== REQUEST ==========
Method : GET
URL : https://jsonplaceholder.typicode.com/posts
=============================

Request completed in
84 ms

========== RESPONSE ==========
Status : 200
Status Text : OK
=============================
```

---

# ✅ Assignment 3

## Global Error Interceptor

### Features

- retry(2)
- catchError()
- Handles HTTP Errors

| Status Code | Action |
|-------------|--------|
| 400 | Bad Request |
| 401 | Remove Token + Redirect to Login |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 500 | Server Error |

---

# Toast Notification

Whenever an error occurs, a toast notification appears.

Example:

```text
❌ 404 Resource Not Found
```

---

# Error Log Service

All errors are stored inside **ErrorLogService**.

The Debug page displays previously logged errors.

Example

```text
Error Logs

404 Resource Not Found

500 Internal Server Error

401 Unauthorized
```

---

# Routing

| Route | Description |
|--------|-------------|
| / | Home Page |
| /debug | Debug Page |
| /login | Login Page |

---

# Technologies Used

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Angular HTTP Client
- Functional HTTP Interceptors

---

# How to Run

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run project

```bash
ng serve
```

Open

```
http://localhost:4200
```

---

# Assignment 1 Output

### Home Page

```
-------------------------------------

Angular HTTP Interceptor Assignment

Home | Debug | Login

-------------------------------------

[ Load Posts ]

-------------------------------------

Post Title

Post Description

-------------------------------------

Post Title

Post Description
```

---

### Browser Console

```text
========== REQUEST ==========
Method : GET
URL : https://jsonplaceholder.typicode.com/posts
=============================

Request completed in
79 ms

========== RESPONSE ==========
Status : 200
Status Text : OK
=============================
```

---

# Assignment 3 Output

## 404 Error

```text
❌ 404 Resource Not Found
```

---

## 401 Error

```text
Token Removed

Redirecting to Login...
```

---

## 500 Error

```text
Something went wrong on the server.
```

---

## Debug Page

```text
Error Logs

404 Resource Not Found

500 Internal Server Error

401 Unauthorized
```

---

# Learning Outcomes

- HTTP Interceptors
- Functional Interceptors
- HTTP Request Pipeline
- RxJS retry()
- RxJS catchError()
- Dependency Injection
- Angular Services
- Global Error Handling
- Toast Notifications
- Angular Routing

---

# Author

**Shaily Kumari**
Angular Training

---

<div align="center">

⭐ If you found this project helpful, don't forget to star the repository.

</div>
