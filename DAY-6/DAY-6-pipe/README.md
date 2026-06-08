# Angular Pipes - Day 6 Assignment

## 📖 Introduction

This project demonstrates the use of **Angular Pipes** to transform and format data directly in templates. It includes examples of commonly used built-in pipes and pipe chaining techniques for displaying data in a user-friendly format.

---

## 🎯 Objectives

- Understand the concept of Angular Pipes.
- Learn how to use built-in pipes.
- Format strings, numbers, dates, currencies, and percentages.
- Use the Slice Pipe for extracting portions of strings and arrays.
- Display objects using the JSON Pipe.
- Implement Pipe Chaining for multiple transformations.

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML
- CSS

---

## 📂 Project Structure

```text
DAY-6-pipe/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   │
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

---

## 🔹 Angular Pipes Demonstrated

### 1. UpperCase Pipe

Converts text to uppercase.

```html
{{ name | uppercase }}
```

### 2. LowerCase Pipe

Converts text to lowercase.

```html
{{ name | lowercase }}
```

### 3. TitleCase Pipe

Converts the first letter of each word to uppercase.

```html
{{ title | titlecase }}
```

### 4. Date Pipe

Formats dates in different styles.

```html
{{ today | date:'fullDate' }}
```

### 5. Currency Pipe

Formats numbers as currency values.

```html
{{ salary | currency:'INR' }}
```

### 6. Percent Pipe

Displays a number as a percentage.

```html
{{ score | percent }}
```

### 7. Number Pipe

Formats decimal numbers.

```html
{{ price | number:'1.2-2' }}
```

### 8. Slice Pipe

Extracts a portion of a string or array.

```html
{{ text | slice:0:10 }}
```

### 9. JSON Pipe

Displays objects in JSON format.

```html
{{ user | json }}
```

---

## 🔗 Pipe Chaining Example

Multiple pipes can be combined to perform complex transformations.

```html
{{ blogPost.title | titlecase | slice:0:40 }}...
```

### Output

```
Angular Pipes: A Complete Guide For Mod...
```

This example:

- Converts the text to Title Case.
- Displays only the first 40 characters.
- Appends `...` at the end.

---

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Shaily-kumari5/CG_HERITAGE_ANGULAR.git
```

### 2. Navigate to the Project Folder

```bash
cd CG_HERITAGE_ANGULAR/DAY-6/DAY-6-pipe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
ng serve
```

### 5. Open in Browser

```text
http://localhost:4200
```

---

## 📚 Learning Outcomes

After completing this assignment, I learned:

- The purpose of Angular Pipes.
- How to use built-in pipes effectively.
- How to pass arguments to pipes.
- How to chain multiple pipes together.
- How pipes improve template readability and maintainability.
- How to format data without modifying component logic.

---

## 👨‍💻 Author

**Shaily Kumari**

GitHub: https://github.com/Shaily-kumari5

---

## ⭐ Acknowledgement

This project was created as part of Angular learning and practice to gain hands-on experience with data transformation using Angular Pipes.
