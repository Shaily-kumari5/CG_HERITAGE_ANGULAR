<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:4facfe,50:00f2fe,100:43e97b&text=Angular%20Basics%20-%20Day%202&fontSize=45&fontColor=ffffff&animation=fadeIn" width="100%"/>

# 🚀 Angular Basics - Day 2 Assignment

### Learning Angular Components, TypeScript & Project Structure

<p>
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&pause=1000&color=00BFFF&center=true&vCenter=true&width=700&lines=Angular+Learning+Journey;Understanding+Components;Exploring+TypeScript;Building+Modern+Web+Applications"/>

</div>

---

# 📖 Overview

This project introduces the fundamental concepts of Angular development. It focuses on understanding Angular components, project structure, TypeScript integration, and dynamic data rendering using Angular templates.

The objective of this assignment is to gain practical experience with Angular fundamentals and component-based architecture.

---

# 🎯 Learning Objectives

✅ Understand Angular Project Structure

✅ Learn How Angular Components Work

✅ Create and Use Standalone Components

✅ Work with TypeScript Variables and Methods

✅ Display Dynamic Data in Angular Templates

✅ Understand the Relationship Between TypeScript, HTML, and CSS

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| 🔴 Angular | Frontend Framework |
| 🔵 TypeScript | Application Logic |
| 🟠 HTML5 | Structure |
| 🔷 CSS3 | Styling |

---

# 📂 Project Structure

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

# 🧩 Angular Component Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.html',
  styleUrls: ['./example.css']
})
export class ExampleComponent {

  name = 'Shaily Kumari';

  showMessage() {
    return 'Welcome to Angular!';
  }

}
```

---

# 📝 Displaying Data

Angular allows data from the component to be displayed dynamically in the template.

```html
<h2>{{ name }}</h2>
```

### Output

```text
Shaily Kumari
```

---

# ⚙️ TypeScript Variables

```typescript
name: string = 'Shaily Kumari';
age: number = 21;
city: string = 'Kolkata';
```

---

# 🔥 Features

✨ Angular Project Setup

✨ Component Creation

✨ TypeScript Integration

✨ Dynamic Data Display

✨ Reusable Component Structure

✨ Beginner-Friendly Examples

---

# 🏗️ Angular Architecture

```text
┌────────────────────┐
│     HTML View      │
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
│ Data & Business    │
│      Logic         │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Rendered Output    │
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
cd CG_HERITAGE_ANGULAR/DAY-2
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

✅ Angular Project Structure

✅ Angular Components

✅ TypeScript Fundamentals

✅ Dynamic Data Rendering

✅ Component-Based Development

✅ Angular Template Syntax

---

# 📸 Project Preview

Add screenshots of your project here.

```markdown
![Project Screenshot](./screenshots/home.png)
```

---

# 🌱 Future Enhancements

- Event Binding
- Property Binding
- Two-Way Data Binding
- Directives
- Pipes
- Routing
- Services
- API Integration

---

# 👩‍💻 Author

## Shaily Kumari

GitHub: https://github.com/Shaily-kumari5

---

<div align="center">

## ⭐ If you found this project helpful, please consider giving it a Star!

### Made with ❤️ while learning Angular

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:4facfe,50:00f2fe,100:43e97b"/>

</div>
