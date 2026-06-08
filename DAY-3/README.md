<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:FF512F,50:DD2476,100:6A11CB&text=Angular%20Fundamentals%20-%20Day%203&fontSize=42&fontColor=ffffff&animation=fadeIn" width="100%"/>

# 🚀 Angular Fundamentals - Day 3 Assignment

### Exploring Data Binding, Event Handling & User Interaction

<p>
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&pause=1000&color=FF1493&center=true&vCenter=true&width=700&lines=Learning+Angular+Data+Binding;Understanding+Components;Handling+User+Events;Building+Interactive+Applications"/>

</div>

---

# 📖 Overview

This project focuses on Angular fundamentals and user interaction. It demonstrates how Angular connects the component class with the user interface using various data binding techniques.

The assignment covers interpolation, property binding, event binding, two-way data binding, conditional rendering, and dynamic UI updates.

---

# 🎯 Learning Objectives

✅ Understand Angular Components

✅ Learn Interpolation (`{{ }}`)

✅ Implement Property Binding (`[ ]`)

✅ Implement Event Binding (`( )`)

✅ Use Two-Way Data Binding (`[(ngModel)]`)

✅ Handle User Interactions

✅ Update UI Dynamically

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| 🔴 Angular | Frontend Framework |
| 🔵 TypeScript | Application Logic |
| 🟠 HTML5 | Structure |
| 🔷 CSS3 | Styling |
| ⚡ Angular Forms | Two-Way Binding |

---

# 📂 Project Structure

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

# 🔥 Concepts Covered

## 📝 Interpolation

Displays data from the component into the template.

```html
<h2>{{ name }}</h2>
```

### Output

```text
Shaily Kumari
```

---

## 🎯 Property Binding

Binds HTML properties to component variables.

```html
<button [disabled]="isDisabled">
  Click Me
</button>
```

---

## ⚡ Event Binding

Executes methods when events occur.

```html
<button (click)="followUser()">
  Follow
</button>
```

---

## 🔄 Two-Way Data Binding

Synchronizes data between the UI and component.

```html
<input [(ngModel)]="username">
<p>{{ username }}</p>
```

---

## 🔀 Conditional Rendering

Displays content based on conditions.

```html
<p *ngIf="isLoggedIn">
  Welcome User!
</p>
```

---

# 💻 Example Component

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

# ✨ Features

🚀 Dynamic Data Rendering

🚀 User Interaction Handling

🚀 Real-Time UI Updates

🚀 Angular Data Binding

🚀 Component-Based Development

🚀 Interactive Profile Card

---

# 🏗️ Angular Data Flow

```text
┌────────────────────┐
│   User Interface   │
│      (HTML)        │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Angular Component  │
│   (TypeScript)     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ User Interaction   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Updated UI Output  │
└────────────────────┘
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Shaily-kumari5/CG_HERITAGE_ANGULAR.git
```

## Navigate to Project

```bash
cd CG_HERITAGE_ANGULAR/DAY-3
```

## Install Dependencies

```bash
npm install
```

## Run Application

```bash
ng serve
```

## Open Browser

```text
http://localhost:4200
```

---

# 📚 Learning Outcomes

After completing this assignment, I learned:

✅ Angular Data Binding

✅ Event Handling

✅ Property Binding

✅ Two-Way Data Binding

✅ Conditional Rendering

✅ Dynamic UI Updates

✅ User Interaction Management

---

# 📸 Project Preview

Add screenshots of your application here.

```markdown
![Project Screenshot](./screenshots/home.png)
```

---

# 🌱 Future Enhancements

- Angular Directives
- Angular Pipes
- Services
- Routing
- Forms Validation
- API Integration

---

# 👩‍💻 Author

## Shaily Kumari

GitHub: https://github.com/Shaily-kumari5

---

<div align="center">

## ⭐ If you found this project helpful, please consider giving it a Star!

### Made with ❤️ while learning Angular

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:FF512F,50:DD2476,100:6A11CB"/>

</div>
