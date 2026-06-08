# Angular Basics - Day 2 Assignment

## 📖 Overview

This project introduces the basic concepts of Angular application development. It focuses on creating components, understanding the Angular project structure, working with TypeScript variables, and displaying data using Angular templates.

The goal of this assignment is to gain hands-on experience with Angular fundamentals and component-based architecture.

---

## 🎯 Learning Objectives

- Understand Angular project structure.
- Learn how Angular components work.
- Create and use standalone components.
- Work with TypeScript variables and methods.
- Display dynamic data in Angular templates.
- Understand the relationship between TypeScript, HTML, and CSS files.

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML
- CSS

---

## 📂 Project Structure

```text
DAY-2/
│
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── components/
│   │
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

---

## 🔹 Concepts Covered

### Angular Component

A component is the basic building block of an Angular application. It controls a section of the user interface.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.html',
  styleUrls: ['./example.css']
})
export class ExampleComponent {
  name = 'Shaily Kumari';
}
```

---

### Displaying Data

Data from the component can be displayed in the template using Angular expressions.

```html
<h2>{{ name }}</h2>
```

### Output

```text
Shaily Kumari
```

---

### TypeScript Variables

Angular components use TypeScript for application logic.

```typescript
name: string = 'Shaily Kumari';
age: number = 21;
city: string = 'Kolkata';
```

---

### Methods in Components

Methods can be created to perform actions and update data.

```typescript
showMessage() {
  return 'Welcome to Angular!';
}
```

---

## 🚀 Features

- Angular project setup
- Component creation
- TypeScript variables
- Dynamic data display
- Basic Angular template syntax
- Understanding Angular architecture

---

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Shaily-kumari5/CG_HERITAGE_ANGULAR.git
```

### 2. Navigate to the Project Folder

```bash
cd CG_HERITAGE_ANGULAR/DAY-2
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
ng serve
```

### 5. Open in Browser

```text
http://localhost:4200
```

---

## 📚 Angular Architecture Overview

```text
User Interface (HTML)
        ↓
Component (TypeScript)
        ↓
Data & Logic
        ↓
Rendered View
```

Angular follows a component-based architecture where each component manages its own template, logic, and styling.

---

## 🎓 Learning Outcomes

After completing this assignment, I learned:

- Angular project structure.
- Purpose of Angular components.
- Basics of TypeScript in Angular.
- How to display dynamic data.
- Component-based application development.
- Angular template syntax and expressions.

---

## 👨‍💻 Author

**Shaily Kumari**

GitHub: https://github.com/Shaily-kumari5

---

## ⭐ Acknowledgement

This project was completed as part of Angular learning and practice to build a strong foundation in Angular development and component-based architecture.
