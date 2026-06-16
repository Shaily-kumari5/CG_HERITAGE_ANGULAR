# 🚀 Day 12 — Angular Router Multi-Page SPA

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge\&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge\&logo=typescript)
![Router](https://img.shields.io/badge/Angular_Router-Dynamic_Routing-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

### 🌐 Multi-Page Single Page Application using Angular Router

A modern Angular application demonstrating routing, navigation, route parameters, query parameters, and dynamic page rendering using Angular Router.

</div>

---

## 📖 Project Overview

This project is part of the **Angular Heritage Training Program - Day 12 Assignment**.

The goal of this assignment is to understand and implement:

✅ Angular Router

✅ Multi-Page SPA Architecture

✅ Route Navigation

✅ Dynamic Route Parameters

✅ Query Parameters

✅ RouterLink & RouterLinkActive

✅ Programmatic Navigation

---

## ✨ Features

### 🏠 Home Page

* Welcome screen of the application
* Acts as the default route

### ℹ️ About Page

* Displays project information
* Demonstrates navigation between components

### 🎓 Students Page

* Displays a list of students
* Each student is clickable
* Supports query parameter search

### 👤 Student Detail Page

* Displays selected student information
* Reads student ID from URL
* Includes "Go Back" navigation

### 🔥 Active Navigation Highlight

* Current route is visually highlighted
* Uses Angular's `routerLinkActive`

---

## 🛣 Routing Configuration

| Route           | Description     |
| --------------- | --------------- |
| `/`             | Home Page       |
| `/about`        | About Page      |
| `/students`     | Students List   |
| `/students/:id` | Student Details |

### Example

```bash
/students/101
```

Displays:

```text
Viewing Student ID: 101
```

---

## 🎯 Bonus Implementation

### Query Parameters

Search functionality implemented using Angular Query Parameters.

Example URL:

```bash
/students?search=Aman
```

Output:

```text
Search Value: Aman
```

Technologies Used:

```ts
ActivatedRoute
queryParams
Router.navigate()
```

---

## 🛠 Tech Stack

| Technology     | Purpose              |
| -------------- | -------------------- |
| Angular 20     | Frontend Framework   |
| TypeScript     | Application Logic    |
| HTML5          | Structure            |
| CSS3           | Styling              |
| Angular Router | Navigation           |
| FormsModule    | Search Functionality |

---

## 📂 Project Structure

```text
DAY-12
│
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── home
│   │   │   ├── about
│   │   │   ├── students
│   │   │   └── student-detail
│   │   │
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.css
│   │
│   └── Images
│       ├── home.png
│       ├── about.png
│       ├── student.png
│       └── student-detail.png
│
└── README.md
```

---

# 📸 Application Screenshots

## 🏠 Home Page

![Home Page](src/Images/home.png)

---

## ℹ️ About Page

![About Page](src/Images/about.png)

---

## 🎓 Students Page

![Students Page](src/Images/student.png)

---

## ▶️ Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd DAY-12
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
ng serve
```

### Open Browser

```bash
http://localhost:4200
```

---

## 📚 Learning Outcomes

Through this assignment, I learned:

* Angular Routing Fundamentals
* Route Configuration
* Dynamic Route Parameters
* Query Parameters
* Navigation Between Components
* RouterLink & RouterLinkActive
* Programmatic Navigation
* Single Page Application (SPA) Design

---

## ✅ Assignment Completion Checklist

* [x] Angular Project with Routing
* [x] Home Component
* [x] About Component
* [x] Students Component
* [x] Student Detail Component
* [x] Navigation Bar
* [x] Active Route Highlight
* [x] Route Parameters
* [x] Query Parameters
* [x] Programmatic Navigation
* [x] Bonus Search Feature

---

<div align="center">

### 👨‍💻 Developed By

# Shaily Kumar

### Angular Heritage Training Program — Day 12 Assignment

⭐ If you found this project useful, consider giving it a star!

</div>
