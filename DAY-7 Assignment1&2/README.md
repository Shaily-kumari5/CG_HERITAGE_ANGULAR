<div align="center">

# 🚀 DAY-7 Assignment 1 & 2
### Angular Component Communication & Lifecycle Hooks

<img src="https://img.shields.io/badge/Angular-20+-red?style=for-the-badge&logo=angular" />
<img src="https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" />

---

### 📚 CG Heritage Angular Training Program

</div>

---

# 📖 Project Overview

This project contains two Angular assignments designed to strengthen understanding of:

✨ Parent-Child Component Communication

✨ Angular Lifecycle Hooks

✨ Data Binding

✨ Component Interaction

✨ Change Detection Process

---

# 🎯 Assignment 1: Parent ➜ Child Communication

## Objective

Learn how data flows between Angular components using the powerful `@Input()` decorator.

### Features

✅ Parent Component Counter

✅ Increment Button

✅ Real-Time Data Updates

✅ Child Component Data Display

✅ Property Binding

---

## Workflow

```text
Parent Component
      │
      ▼
 @Input() Binding
      │
      ▼
Child Component
      │
      ▼
Displays Updated Counter
```

---

## Concepts Covered

| Concept | Description |
|----------|-------------|
| @Input() | Pass data from Parent to Child |
| Property Binding | Bind values dynamically |
| Event Binding | Handle user interactions |
| Component Communication | Share data across components |

---

# 🔄 Assignment 2: Angular Lifecycle Hooks

## Objective

Understand Angular's component lifecycle and the order in which lifecycle hooks execute.

---

## Lifecycle Hooks Implemented

### 🔹 ngOnChanges()

Triggered whenever input properties change.

### 🔹 ngOnInit()

Runs once after component initialization.

### 🔹 ngDoCheck()

Runs during every change detection cycle.

### 🔹 ngAfterContentInit()

Runs after projected content initialization.

### 🔹 ngAfterContentChecked()

Runs after projected content checking.

### 🔹 ngAfterViewInit()

Runs after component view initialization.

### 🔹 ngAfterViewChecked()

Runs after component view checking.

### 🔹 ngOnDestroy()

Runs before component destruction.

---

# 🔍 Lifecycle Flow

```text
ngOnChanges()
      ↓
ngOnInit()
      ↓
ngDoCheck()
      ↓
ngAfterContentInit()
      ↓
ngAfterContentChecked()
      ↓
ngAfterViewInit()
      ↓
ngAfterViewChecked()
      ↓
ngOnDestroy()
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| Angular | Frontend Framework |
| TypeScript | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |

---

# 📂 Project Structure

```text
DAY-7
│
├── src
│   │
│   ├── app
│   │   │
│   │   ├── parent
│   │   │   ├── parent.ts
│   │   │   ├── parent.html
│   │   │   └── parent.css
│   │   │
│   │   ├── child
│   │   │   ├── child.ts
│   │   │   ├── child.html
│   │   │   └── child.css
│   │   │
│   │   └── lifecycle-logger
│   │       ├── lifecycle-logger.ts
│   │       ├── lifecycle-logger.html
│   │       └── lifecycle-logger.css
│   │
│   ├── app.ts
│   ├── app.html
│   └── app.css
│
├── angular.json
├── package.json
└── README.md
```

---

# 🎓 Learning Outcomes

✅ Understanding Angular Components

✅ Parent-Child Data Communication

✅ @Input() Decorator

✅ Event Binding

✅ Angular Lifecycle Hooks

✅ Component Initialization

✅ Change Detection Mechanism

✅ Component Destruction

---

# 🌟 Key Takeaways

> Angular components communicate efficiently using `@Input()` and `@Output()`.

> Lifecycle hooks provide complete control over component creation, updates, rendering, and destruction.

> Understanding component lifecycle is essential for building scalable Angular applications.

---

<div align="center">

## 👨‍💻 Author

### Aman Kumar

🚀 Angular Training - Day 7 Assignment

⭐ If you found this project useful, don't forget to star the repository!

</div>
