# Angular Fundamentals - Day 3 Assignment

## 📖 Overview

This project demonstrates the fundamental concepts of Angular, including component creation, data binding techniques, event handling, and user interaction. The objective of this assignment is to understand how Angular connects data between the component class and the user interface.

---

## 🎯 Learning Objectives

- Understand Angular component architecture.
- Learn Interpolation (`{{ }}`).
- Implement Property Binding (`[ ]`).
- Implement Event Binding (`( )`).
- Use Two-Way Data Binding (`[(ngModel)]`).
- Handle user interactions with button clicks.
- Update UI dynamically using component properties and methods.

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML
- CSS

---

## 📂 Project Structure

```text
DAY-3/
│
├── src/
│   ├── app/
│   │   ├── profile-card/
│   │   │   ├── profile-card.ts
│   │   │   ├── profile-card.html
│   │   │   └── profile-card.css
│   │   │
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.css
│   │
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

---

## 🔹 Concepts Covered

### 1. Interpolation

Displays data from the component class in the template.

```html
<h2>{{ name }}</h2>
```

### Output

```text
Shaily Kumari
```

---

### 2. Property Binding

Binds HTML properties to component values.

```html
<button [disabled]="isDisabled">
  Click Me
</button>
```

---

### 3. Event Binding

Executes a method when an event occurs.

```html
<button (click)="followUser()">
  Follow
</button>
```

---

### 4. Two-Way Data Binding

Synchronizes data between the component and the template.

```html
<input [(ngModel)]="username">
<p>{{ username }}</p>
```

---

### 5. Conditional Rendering

Display content based on conditions.

```html
<p *ngIf="isLoggedIn">
  Welcome User!
</p>
```

---

## 💻 Example Component

### profile-card.ts

```typescript
name = 'Shaily Kumari';
followers = 0;

followUser() {
  this.followers++;
}
```

### profile-card.html

```html
<h2>{{ name }}</h2>

<p>Followers: {{ followers }}</p>

<button (click)="followUser()">
  Follow
</button>
```

---

## 🚀 Features

- User profile display
- Dynamic data rendering
- Button click handling
- Follower counter functionality
- Real-time UI updates
- Angular data binding examples

---

## ▶️ Running the Project

### Clone Repository

```bash
git clone https://github.com/Shaily-kumari5/CG_HERITAGE_ANGULAR.git
```

### Navigate to Project

```bash
cd CG_HERITAGE_ANGULAR/DAY-3
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
ng serve
```

### Open Browser

```text
http://localhost:4200
```

---

## 📚 Key Angular Syntax

| Syntax | Purpose |
|----------|---------|
| `{{ }}` | Interpolation |
| `[property]` | Property Binding |
| `(event)` | Event Binding |
| `[(ngModel)]` | Two-Way Data Binding |
| `*ngIf` | Conditional Rendering |
| `*ngFor` | Looping through data |

---

## 🎓 Learning Outcomes

After completing this assignment, I learned:

- Angular component structure.
- Data binding techniques.
- Event handling in Angular.
- Dynamic UI updates.
- Component communication basics.
- User interaction using TypeScript methods.

---

## 👨‍💻 Author

**Shaily Kumari**

GitHub: https://github.com/Shaily-kumari5

---

## ⭐ Acknowledgement

This project was completed as part of Angular training and practice to strengthen understanding of Angular fundamentals and component-based development.
