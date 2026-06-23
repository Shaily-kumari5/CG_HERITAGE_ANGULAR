# 📘 DAY-17: RxJS Fundamentals & Core Operators in Angular

## 📌 Project Overview

This project demonstrates the fundamentals of **RxJS (Reactive Extensions for JavaScript)** in Angular. It covers creating Observables, subscribing to data streams, and using commonly used RxJS operators such as **map**, **filter**, **tap**, **switchMap**, and **mergeMap**.

The project is divided into two assignments:

* **Assignment 1:** RxJS Fundamentals
* **Assignment 2:** RxJS Core Operators

---

# 🛠 Technologies Used

* Angular 20
* TypeScript
* RxJS
* Angular HttpClient
* JSONPlaceholder API

---

# 📂 Project Structure

```
src
│
├── app
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── app.config.ts
│   └── app.routes.ts
```

---

# 🚀 Assignment 1 – RxJS Fundamentals

## Topics Covered

* Creating an Observable using `new Observable()`
* Creating an Observer
* Subscription
* Unsubscription
* `of()`
* `from()`
* `interval()`
* `timer()`

---

## Task 1 Output

### 1️⃣ Observable Output

The custom Observable emits five numbers and then completes.

```
1
2
3
4
5
```

---

### 2️⃣ of() Output

The `of()` operator emits each value individually.

```
10
20
30
40
```

---

### 3️⃣ from() Output

The `from()` operator converts an array into an Observable.

```
Angular
RxJS
Observable
```

---

### 4️⃣ interval() Output

The `interval()` operator emits sequential values every second.

```
0
1
2
3
4
```

---

### 5️⃣ timer() Output

The `timer()` operator emits a value after 2 seconds.

```
Timer emitted after 2 seconds
```

---

# 🚀 Assignment 2 – RxJS Core Operators

## Topics Covered

* map()
* filter()
* tap()
* switchMap()
* mergeMap()

---

## map() + tap() + filter()

### Input

```
1 2 3 4 5 6 7 8 9 10
```

### Step 1 – map()

Each number is squared.

```
1
4
9
16
25
36
49
64
81
100
```

---

### Step 2 – tap()

The squared values are logged to the browser console before filtering.

```
Before Filter : 1
Before Filter : 4
Before Filter : 9
...
Before Filter : 100
```

---

### Step 3 – filter()

Only numbers greater than 25 are kept.

```
36
49
64
81
100
```

---

## switchMap()

When the **Run switchMap** button is clicked, the application fetches a post from the JSONPlaceholder API.

Example Output

```
ID : 1

Title :
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
```

---

## mergeMap()

When the **Run mergeMap** button is clicked, the application fetches users with IDs **1**, **2**, and **3**.

Example Output

```
1 - Leanne Graham

2 - Ervin Howell

3 - Clementine Bauch
```

Each user is displayed immediately as soon as the API response is received.

---

# 🎯 Learning Outcomes

After completing this project, you will understand how to:

* Create custom Observables
* Create Observers
* Subscribe and unsubscribe from Observables
* Use `of()` and `from()`
* Work with `interval()` and `timer()`
* Transform data using `map()`
* Filter emitted values using `filter()`
* Debug Observable streams using `tap()`
* Handle HTTP requests using `switchMap()`
* Execute multiple HTTP requests using `mergeMap()`
* Build reactive Angular applications using RxJS

---

# ▶️ How to Run the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd DAY17
```

Install dependencies

```bash
npm install
```

Run the Angular application

```bash
ng serve -o
```

Open your browser and visit

```
http://localhost:4200
```

---

# 📸 Expected Output

## Task 1

```
Observable Output
-----------------
1, 2, 3, 4, 5

of() Output
-----------
10, 20, 30, 40

from() Output
-------------
Angular
RxJS
Observable

interval() Output
-----------------
0, 1, 2, 3, 4

timer() Output
--------------
Timer emitted after 2 seconds
```

---

## Task 2

```
map + tap + filter Output
-------------------------
36
49
64
81
100
```

Click **Run switchMap**

```
ID : 1

Title :
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
```

Click **Run mergeMap**

```
1 - Leanne Graham

2 - Ervin Howell

3 - Clementine Bauch
```

---

# 📚 Concepts Practiced

* Reactive Programming
* Observables
* Observers
* Subscriptions
* RxJS Operators
* HTTP Requests
* Angular Standalone Components
* JSONPlaceholder API Integration

---

# 👩‍💻 Author

**Shaily Kumari**

Angular Learning Journey – DAY 17
