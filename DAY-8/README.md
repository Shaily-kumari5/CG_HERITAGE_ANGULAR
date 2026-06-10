<div align="center">

# 🛍️ E-Commerce Modular Angular Application

### ✨ Enterprise-Level Angular Architecture with Feature Modules, Shared Modules, Lazy Loading & Reusable Components

<img src="https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/SCSS-CF649A?style=for-the-badge&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" />

<br>

**🚀 Building Scalable Angular Applications Using Modern Development Practices**

</div>

---

## 🌟 About The Project

This project is a **Mini E-Commerce Platform** developed using **Angular** to demonstrate industry-standard frontend architecture and Angular best practices.

The application emphasizes:

✔ Modular Development

✔ Feature-Based Architecture

✔ Shared Module Reusability

✔ Custom Components

✔ Custom Directives

✔ Custom Pipes

✔ Angular Routing

✔ Lazy Loading

✔ Scalable Project Structure

The project follows a clean and maintainable architecture similar to enterprise-level Angular applications used in production environments.

---

# 🎯 Assignment Goals

> Design and develop a modular Angular application that showcases the practical implementation of Angular Modules, Shared Modules, Components, Directives, Pipes, and Lazy Loading.

---

# 🏛️ System Architecture

```text
ecommerce-app/
│
├── src/
│
├── app/
│   │
│   ├── core/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │
│   │   ├── button/
│   │   ├── badge/
│   │   └── spinner/
│   │
│   │   ├── directives/
│   │   │   ├── highlight.directive.ts
│   │   │   └── truncate-text.directive.ts
│   │
│   │   ├── pipes/
│   │   │   ├── truncate.pipe.ts
│   │   │   └── rupee.pipe.ts
│   │
│   │   └── shared.module.ts
│   │
│   ├── features/
│   │   ├── home/
│   │   ├── products/
│   │   ├── cart/
│   │   └── orders/
│   │
│   ├── navbar/
│   │
│   ├── app-routing.module.ts
│   └── app.module.ts
│
└── README.md
```

---

# 🎨 User Interface Components

## 🔘 Button Component

A reusable button component supporting multiple visual styles.

### Variants

| Variant | Purpose |
|----------|----------|
| Primary | Main actions |
| Secondary | Secondary actions |
| Danger | Delete / Critical actions |

```html
<app-button variant="primary">
 Add To Cart
</app-button>
```

---

## 🏷️ Badge Component

Displays labels, tags, and status indicators.

```html
<app-badge
label="Best Seller"
color="green">
</app-badge>
```

### Use Cases

- Product Tags
- Stock Status
- New Arrivals
- Discount Labels

---

## ⏳ Spinner Component

Lightweight CSS-based loading animation.

### Features

- Pure CSS
- Reusable
- Lightweight
- No external dependency

---

# ✨ Custom Directives

## 🎯 Highlight Directive

Adds interactive hover highlighting.

```html
<p appHighlight color="gold">
Hover over me
</p>
```

### Benefits

✔ Better User Experience

✔ Dynamic Highlight Color

✔ Reusable Across Components

---

## ✂️ Truncate Text Directive

Automatically limits text length.

```html
<p appTruncateText="50">
Very Long Product Description...
</p>
```

### Benefits

✔ Cleaner Layout

✔ Improved Readability

✔ Responsive Content Display

---

# 🔧 Custom Pipes

## ✂️ Truncate Pipe

Transforms lengthy text into concise content.

```html
{{ description | truncate:50:'...' }}
```

### Output

```text
Angular is a powerful framework...
```

---

## ₹ Rupee Pipe

Formats numbers into Indian Currency format.

```html
{{ price | rupee }}
```

### Example

```text
Input  : 125000
Output : ₹1,25,000
```

---

# ⚡ Lazy Loading

Feature modules are loaded only when required.

```typescript
{
 path: 'products',
 loadChildren: () =>
 import('./features/products/products.module')
 .then(m => m.ProductsModule)
}
```

### Advantages

🚀 Faster Initial Load

📦 Reduced Bundle Size

⚡ Improved Performance

📈 Better Scalability

---

# 🧩 Feature Modules

| Module | Description |
|----------|------------|
| 🏠 Home Module | Landing page |
| 📦 Products Module | Product catalog |
| 🛒 Cart Module | Shopping cart management |
| 📋 Orders Module | Order history and tracking |

---

# 💻 Technology Stack

<div align="center">

| Technology | Purpose |
|------------|----------|
| Angular | Frontend Framework |
| TypeScript | Programming Language |
| SCSS | Styling |
| RxJS | Reactive Programming |
| Angular Router | Navigation |
| Angular CLI | Project Management |
| GitHub | Version Control |

</div>

---

# 🚀 Installation Guide

### Clone Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
```

### Move into Project Directory

```bash
cd ecommerce-app
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
ng serve
```

### Open Application

```text
http://localhost:4200
```

---

# 📸 Application Preview

## 🏠 Home Page

```md
Insert Screenshot Here
```

---

## 📦 Products Page

```md
Insert Screenshot Here
```

---

## 🛒 Cart Page

```md
Insert Screenshot Here
```

---

## 📋 Orders Page

```md
Insert Screenshot Here
```

---

# 🎓 Angular Concepts Covered

### Core Concepts

- NgModules
- AppModule
- Feature Modules
- Shared Modules
- Routing
- Lazy Loading

### UI Development

- Reusable Components
- Custom Directives
- Custom Pipes
- SCSS Styling

### Advanced Topics

- Modular Architecture
- Scalability
- Code Reusability
- Maintainability

---

# 📈 Learning Outcomes

By completing this project, developers gain practical experience with:

✨ Enterprise Angular Structure

✨ Reusable Component Design

✨ Shared Module Architecture

✨ Custom Pipe Development

✨ Custom Directive Creation

✨ Route-Based Lazy Loading

✨ Scalable Frontend Development

---

# 🔮 Future Scope

### Planned Enhancements

- 🔍 Product Search
- ❤️ Wishlist Functionality
- 🔐 Authentication & Authorization
- 💳 Payment Gateway Integration
- 📊 Admin Dashboard
- 📦 Inventory Management
- 🌙 Dark Mode
- ⭐ Product Reviews & Ratings
- 🛍️ Checkout Workflow

---

# 🤝 Contributing

Contributions are always welcome.

```bash
# Fork Repository

# Create Feature Branch
git checkout -b feature/new-feature

# Commit Changes
git commit -m "Added New Feature"

# Push Changes
git push origin feature/new-feature
```

Create a Pull Request and your contribution will be reviewed.

---

# 📊 Project Status

<div align="center">

🟢 **COMPLETED**

**Assignment Score Target: 100/100**

</div>

---

# 👩‍💻 Developer

<div align="center">

## Shaily Kumari

### Angular Developer • Frontend Enthusiast • Lifelong Learner

Building modern, scalable, and user-friendly web applications using Angular.

</div>

---

<div align="center">

### 🌟 If you found this project useful, don't forget to leave a Star ⭐

### Made with ❤️ using Angular, TypeScript & SCSS

</div>
