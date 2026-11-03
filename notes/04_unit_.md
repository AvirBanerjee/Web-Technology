# Unit IV: JavaScript Fundamentals and DOM

## 1. Introduction to JavaScript

JavaScript (JS) is the programming language of the web. HTML provides structure, CSS provides presentation, and JavaScript provides behavior: it lets a page respond to user actions, change its own content, validate input, and store data.

**Where to write JavaScript**

```html
<!-- Inline (avoid in real projects) -->
<button onclick="alert('Hello')">Click</button>

<!-- Internal -->
<script>
    console.log("Hello from internal script");
</script>

<!-- External (recommended) -->
<script src="app.js" defer></script>
```

- `defer` tells the browser to download the script while parsing HTML and run it only after the DOM is fully built (this connects to the rendering pipeline in Unit I). Without `defer`, a script placed in `<head>` runs before the elements exist, and DOM selection returns `null`.

**Output methods for practice**

| Method | Purpose |
|---|---|
| `console.log(value)` | Prints to the DevTools Console |
| `alert(message)` | Shows a popup box |
| `prompt(message)` | Shows a popup asking the user for input; returns a string |
| `document.write()` | Writes into the page (avoid; for demonstration only) |

---

## 2. Variables

A variable is a named container for storing a value.

| Keyword | Scope | Reassignable | Redeclarable | Notes |
|---|---|---|---|---|
| `var` | Function | Yes | Yes | Old style; hoisted and initialized as `undefined` |
| `let` | Block | Yes | No | Preferred for values that change |
| `const` | Block | No | No | Preferred by default; must be initialized at declaration |

```js
let age = 20;
age = 21;              // allowed

const PI = 3.14159;
// PI = 3;             // TypeError: Assignment to constant variable

var city = "Raipur";   // avoid in modern code
```

**Important point about `const`**: it prevents reassignment of the variable, not mutation of the value it points to.

```js
const student = { name: "Ravi" };
student.name = "Simran";   // allowed: the object is modified
// student = {};            // TypeError: reassignment not allowed
```

**Naming rules**
- Can contain letters, digits, `_` and `$`; cannot start with a digit.
- Case-sensitive: `Age` and `age` are different variables.
- Cannot use reserved words such as `let`, `class`, `return`.
- Convention: `camelCase` for variables and functions (`totalMarks`), `UPPER_SNAKE_CASE` for constants (`MAX_SIZE`), `PascalCase` for classes (`Student`).

**Hoisting**: declarations are processed before code runs.

```js
console.log(a);   // undefined (var is hoisted, value is not)
var a = 5;

console.log(b);   // ReferenceError (let exists but is in the "temporal dead zone")
let b = 5;
```

---

## 3. Data Types

JavaScript has **primitive** types and **reference** types.

**Primitive types**

| Type | Example | Notes |
|---|---|---|
| `string` | `"hello"`, `'hi'`, `` `hey` `` | Text |
| `number` | `42`, `3.14`, `-7` | Integers and decimals share one type; includes `NaN` and `Infinity` |
| `boolean` | `true`, `false` | Logical values |
| `undefined` | `let x;` | Declared but no value assigned |
| `null` | `let y = null;` | Intentional "no value" |
| `bigint` | `123n` | Very large integers |
| `symbol` | `Symbol("id")` | Unique identifiers (advanced) |

**Reference types**: objects, arrays, functions.

**Checking type with `typeof`**

```js
typeof "hello";     // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"  (a well-known historical quirk)
typeof [1, 2];      // "object"  (use Array.isArray to check for arrays)
typeof function(){} // "function"
```

**Type conversion**

```js
Number("42");       // 42
Number("abc");      // NaN
String(100);        // "100"
Boolean(0);         // false
parseInt("42px");   // 42
parseFloat("3.14abc"); // 3.14

"5" + 2;            // "52"  (string concatenation wins)
"5" - 2;            // 3     (subtraction forces numeric conversion)
```

**Truthy and falsy values**
- Falsy: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
- Everything else is truthy, including `"0"`, `"false"`, `[]` and `{}`.

```js
if ("") { }        // does not run
if ("hello") { }   // runs
if ([]) { }        // runs (an empty array is truthy)
```

---

## 4. Operators

**Arithmetic**

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | Division | `5 / 2` | `2.5` |
| `%` | Remainder | `5 % 2` | `1` |
| `**` | Exponent | `2 ** 3` | `8` |
| `++` / `--` | Increment / decrement | `x++` | x increases by 1 |

**Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`

```js
let total = 10;
total += 5;    // total = 15
```

**Comparison**

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Equal (converts types) | `"5" == 5` | `true` |
| `===` | Strictly equal (no conversion) | `"5" === 5` | `false` |
| `!=` | Not equal (converts types) | `"5" != 5` | `false` |
| `!==` | Strictly not equal | `"5" !== 5` | `true` |
| `>` `<` `>=` `<=` | Relational | `7 >= 7` | `true` |

Always prefer `===` and `!==` to avoid surprises from automatic type conversion.

**Logical**

| Operator | Meaning | Example |
|---|---|---|
| `&&` | AND: true if both are true | `age > 18 && hasId` |
| `\|\|` | OR: true if either is true | `isAdmin \|\| isOwner` |
| `!` | NOT: reverses the value | `!isLoggedIn` |

`&&` and `||` return one of their operands, not necessarily a boolean, which enables default values:

```js
let name = userInput || "Guest";   // "Guest" if userInput is falsy
```

**Nullish coalescing `??`** returns the right side only when the left is `null` or `undefined` (so `0` and `""` are kept):

```js
let count = 0;
console.log(count || 10);   // 10 (0 is falsy)
console.log(count ?? 10);   // 0
```

**Optional chaining `?.`** safely reads nested properties:

```js
const user = {};
console.log(user.address?.city);   // undefined, instead of throwing an error
```

**Ternary operator**: a compact if/else expression.

```js
let status = marks >= 40 ? "Pass" : "Fail";
```

---

## 5. Conditionals

**if / else if / else**

```js
let marks = 72;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
```

Conditions are checked top to bottom, and only the first matching branch runs.

**switch**: best when comparing one value against many fixed cases.

```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}
```

- `switch` uses strict comparison (`===`).
- Without `break`, execution "falls through" into the next case.

---

## 6. Loops

**for**: use when the number of iterations is known.

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Parts: initialization (`let i = 1`), condition (`i <= 5`), update (`i++`).

**while**: use when the number of iterations depends on a condition.

```js
let n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}
```

**do...while**: runs the body at least once, then checks the condition.

```js
let x = 10;
do {
    console.log(x);
    x++;
} while (x < 5);    // prints 10 once
```

**for...of**: iterates over values of an array or string.

```js
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
    console.log(fruit);
}
```

**for...in**: iterates over the keys of an object.

```js
const student = { name: "Ravi", age: 19 };
for (const key in student) {
    console.log(key, student[key]);
}
```

**break and continue**

```js
for (let i = 1; i <= 10; i++) {
    if (i === 3) continue;   // skip 3
    if (i === 7) break;      // stop the loop at 7
    console.log(i);          // 1 2 4 5 6
}
```

**Example: sum of numbers 1 to 100**

```js
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);   // 5050
```

---

## 7. Strings

A string is a sequence of characters. Strings are immutable: methods return a new string and never change the original.

**Creating strings**

```js
let a = "double quotes";
let b = 'single quotes';
let c = `template literal`;
```

**Template literals** (backticks) allow embedded expressions and multi-line text:

```js
let name = "Ravi";
let marks = 85;
console.log(`${name} scored ${marks} marks, which is ${marks >= 40 ? "pass" : "fail"}.`);
```

**Common string properties and methods**

| Member | Purpose | Example | Result |
|---|---|---|---|
| `length` | Number of characters | `"hello".length` | `5` |
| `toUpperCase()` / `toLowerCase()` | Change case | `"Hi".toUpperCase()` | `"HI"` |
| `trim()` | Remove surrounding whitespace | `"  hi  ".trim()` | `"hi"` |
| `includes(x)` | Contains substring? | `"hello".includes("ell")` | `true` |
| `startsWith(x)` / `endsWith(x)` | Check beginning/end | `"hello".startsWith("he")` | `true` |
| `indexOf(x)` | Position of first match, or -1 | `"hello".indexOf("l")` | `2` |
| `slice(start, end)` | Extract part (end excluded) | `"hello".slice(1, 4)` | `"ell"` |
| `split(sep)` | Convert to array | `"a,b,c".split(",")` | `["a","b","c"]` |
| `replace(a, b)` | Replace first match | `"cat".replace("c", "b")` | `"bat"` |
| `replaceAll(a, b)` | Replace all matches | `"a-b-c".replaceAll("-", "+")` | `"a+b+c"` |
| `charAt(i)` or `str[i]` | Character at index | `"hello"[1]` | `"e"` |
| `repeat(n)` | Repeat string | `"ab".repeat(3)` | `"ababab"` |
| `padStart(n, ch)` | Pad to length | `"7".padStart(3, "0")` | `"007"` |

**Example: reverse a string and check for palindrome**

```js
function isPalindrome(text) {
    const clean = text.toLowerCase().replaceAll(" ", "");
    const reversed = clean.split("").reverse().join("");
    return clean === reversed;
}

console.log(isPalindrome("Nitin"));         // true
console.log(isPalindrome("never odd or even")); // true
```

---

## 8. Functions

A function is a reusable block of code that performs a task, optionally accepting inputs (parameters) and returning an output.

**Function declaration**

```js
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));   // 7
```

Declarations are hoisted, so they can be called before they appear in the file.

**Function expression**

```js
const multiply = function (a, b) {
    return a * b;
};
```

Not hoisted in the same way: it can only be called after the line that defines it.

**Arrow function** (compact syntax)

```js
const square = (n) => n * n;                // single expression: implicit return
const greet = (name) => {                   // block body: explicit return required
    return `Hello, ${name}`;
};
const sayHi = () => console.log("Hi");      // no parameters
```

**Default parameters**

```js
function welcome(name = "Guest") {
    return `Welcome, ${name}`;
}
console.log(welcome());          // Welcome, Guest
console.log(welcome("Simran"));  // Welcome, Simran
```

**Rest parameters**: collect any number of arguments into an array.

```js
function sumAll(...numbers) {
    let total = 0;
    for (const n of numbers) total += n;
    return total;
}
console.log(sumAll(1, 2, 3, 4));   // 10
```

**Return values**
- A function without a `return` statement returns `undefined`.
- `return` immediately exits the function.

**Functions as values (first-class functions)**: functions can be stored in variables, passed as arguments, and returned from other functions.

```js
function applyTwice(fn, value) {
    return fn(fn(value));
}
console.log(applyTwice((x) => x * 2, 5));   // 20
```

A function passed to another function to be called later is called a **callback**.

---

## 9. Scope

Scope decides where a variable can be accessed.

| Scope | Created by | Accessible |
|---|---|---|
| Global | Declared outside any function/block | Everywhere |
| Function | Declared inside a function | Only inside that function |
| Block | `let`/`const` inside `{ }` (if, for, etc.) | Only inside that block |

```js
let globalVar = "I am global";

function demo() {
    let functionVar = "I am local to demo";
    if (true) {
        let blockVar = "I am local to this block";
        var oldStyle = "var ignores block scope";
    }
    console.log(oldStyle);    // works
    // console.log(blockVar); // ReferenceError
}
// console.log(functionVar);  // ReferenceError
```

**Scope chain**: when a variable is used, JavaScript looks in the current scope, then the outer scope, then further outward until the global scope. The first match wins (inner variables shadow outer ones with the same name).

**Closures**: an inner function remembers the variables of the function where it was created, even after that outer function has finished.

```js
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());   // 1
console.log(counter());   // 2
console.log(counter());   // 3
```

`count` is private: it can only be changed through the returned function.

**Classic loop pitfall with `var`**

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);   // prints 3, 3, 3
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);   // prints 0, 1, 2
}
```

`let` creates a fresh variable for each iteration; `var` shares a single variable across all iterations.

---

## 10. Arrays and Array Methods

An array is an ordered list of values, indexed from 0.

```js
const marks = [78, 85, 92, 64];
console.log(marks[0]);       // 78
console.log(marks.length);   // 4
console.log(marks[marks.length - 1]);   // 64 (last element)
```

**Adding and removing elements (these modify the original array)**

| Method | Effect | Example |
|---|---|---|
| `push(x)` | Add to end | `arr.push(5)` |
| `pop()` | Remove from end, returns it | `arr.pop()` |
| `unshift(x)` | Add to start | `arr.unshift(0)` |
| `shift()` | Remove from start, returns it | `arr.shift()` |
| `splice(i, n, ...items)` | Remove/insert at position | `arr.splice(1, 2)` removes 2 items starting at index 1 |
| `sort()` | Sort in place | see note below |
| `reverse()` | Reverse in place | `arr.reverse()` |

**Non-mutating methods (return a new value)**

| Method | Purpose | Example |
|---|---|---|
| `slice(start, end)` | Copy a portion | `[1,2,3,4].slice(1,3)` gives `[2,3]` |
| `concat(other)` | Join arrays | `[1].concat([2])` gives `[1,2]` |
| `includes(x)` | Contains value? | `[1,2].includes(2)` gives `true` |
| `indexOf(x)` | First index or -1 | `[5,6].indexOf(6)` gives `1` |
| `join(sep)` | Array to string | `["a","b"].join("-")` gives `"a-b"` |

**Sorting note**: `sort()` converts items to strings by default, so numbers must use a compare function.

```js
const nums = [10, 9, 100, 1];
nums.sort();                    // [1, 10, 100, 9]  (string order, wrong for numbers)
nums.sort((a, b) => a - b);     // [1, 9, 10, 100]  ascending
nums.sort((a, b) => b - a);     // [100, 10, 9, 1]  descending
```

**Higher-order array methods** (take a callback function; central to modern JavaScript)

**forEach**: run a function for each element; returns nothing.

```js
[1, 2, 3].forEach((n) => console.log(n * 2));
```

**map**: transform every element into a new array of the same length.

```js
const marks = [40, 55, 70];
const percentages = marks.map((m) => (m / 100) * 100 + "%");
const doubled = [1, 2, 3].map((n) => n * 2);   // [2, 4, 6]
```

**filter**: keep only elements for which the callback returns true.

```js
const scores = [35, 80, 42, 91];
const passed = scores.filter((s) => s >= 40);   // [80, 42, 91]
```

**find / findIndex**: first matching element (or its index).

```js
const first = scores.find((s) => s > 50);        // 80
const pos = scores.findIndex((s) => s > 50);     // 1
```

**some / every**: test if any / all elements satisfy a condition (return boolean).

```js
scores.some((s) => s > 90);     // true
scores.every((s) => s >= 40);   // false
```

**reduce**: combine all elements into a single value.

```js
const total = scores.reduce((acc, s) => acc + s, 0);
// acc starts at 0, then accumulates each score
const max = scores.reduce((best, s) => (s > best ? s : best), scores[0]);
```

**Method chaining**: methods can be combined.

```js
const avgOfPassed =
    scores.filter((s) => s >= 40)
          .reduce((a, s) => a + s, 0) / scores.filter((s) => s >= 40).length;
```

**Spread operator and destructuring**

```js
const a = [1, 2];
const b = [...a, 3, 4];           // [1, 2, 3, 4]  (copy and extend)

const [first, second] = [10, 20, 30];   // first = 10, second = 20
```

**Array of arrays (2D)**

```js
const table = [[1, 2], [3, 4]];
console.log(table[1][0]);   // 3
```

---

## 11. Objects

An object stores related data as key-value pairs (properties), and can also hold functions (methods).

```js
const student = {
    name: "Ravi",
    age: 19,
    marks: [78, 85, 92],
    address: { city: "Bhilai", state: "Chhattisgarh" },
    greet() {
        return `Hi, I am ${this.name}`;
    }
};
```

**Accessing and modifying**

```js
console.log(student.name);          // dot notation
console.log(student["age"]);        // bracket notation (needed for dynamic keys)
student.age = 20;                   // update
student.email = "ravi@example.com"; // add new property
delete student.email;               // remove property
console.log(student.address.city);  // nested access
console.log(student.greet());       // calling a method
```

**Dynamic key access**

```js
const key = "name";
console.log(student[key]);   // "Ravi"
```

**Useful object utilities**

| Expression | Result |
|---|---|
| `Object.keys(student)` | Array of property names |
| `Object.values(student)` | Array of property values |
| `Object.entries(student)` | Array of `[key, value]` pairs |
| `"name" in student` | `true` if the property exists |
| `Object.assign({}, a, b)` or `{...a, ...b}` | Copy / merge objects |

```js
const copy = { ...student, age: 21 };   // new object with age overridden
const { name, age } = student;          // destructuring
```

**The `this` keyword**: inside a method, `this` refers to the object the method is called on. Arrow functions do not have their own `this`, so avoid them as object methods.

**Objects are reference types**

```js
const a = { x: 1 };
const b = a;       // b points to the SAME object
b.x = 99;
console.log(a.x);  // 99

const c = { ...a };  // shallow copy: a separate object
c.x = 5;
console.log(a.x);    // still 99
```

**Array of objects: the standard real-world data shape**

```js
const students = [
    { name: "Ravi",   marks: [78, 85, 92, 64, 70] },
    { name: "Simran", marks: [90, 88, 95, 91, 87] }
];

const result = students.map((s) => {
    const total = s.marks.reduce((a, m) => a + m, 0);
    return { name: s.name, total, average: total / s.marks.length };
});
console.log(result);
```

This pattern is the foundation of Experiment 4 (computing totals, averages, grades, and ranks for 25 students).

**JSON conversion** (used heavily with localStorage and APIs)

```js
const text = JSON.stringify(student);   // object to JSON string
const obj = JSON.parse(text);           // JSON string back to object
```

---

## 12. Classes

A class is a blueprint for creating many objects that share the same structure and behavior.

```js
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    total() {
        return this.marks.reduce((a, m) => a + m, 0);
    }

    average() {
        return this.total() / this.marks.length;
    }

    grade() {
        const avg = this.average();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "D";
    }
}

const s1 = new Student("Ravi", [78, 85, 92]);
console.log(s1.total());     // 255
console.log(s1.average());   // 85
console.log(s1.grade());     // "B"
```

- `constructor` runs automatically when `new` is used and sets up the object's initial properties.
- Methods defined in the class are shared by all instances.

**Inheritance with `extends` and `super`**

```js
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        return `I am ${this.name}`;
    }
}

class Trainer extends Person {
    constructor(name, subject) {
        super(name);            // calls the parent constructor
        this.subject = subject;
    }
    introduce() {
        return `${super.introduce()} and I teach ${this.subject}`;
    }
}

const t = new Trainer("Avir", "Web Development");
console.log(t.introduce());   // I am Avir and I teach Web Development
```

**Static members**: belong to the class itself, not to instances.

```js
class MathUtil {
    static square(n) {
        return n * n;
    }
}
console.log(MathUtil.square(5));   // 25
```

**Getters and setters**

```js
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
}
console.log(new Circle(2).area);   // accessed like a property, no ()
```

---

## 13. Prototype Basics

JavaScript objects inherit from other objects through a **prototype chain**. A class is largely a cleaner syntax over this mechanism.

Every object has a hidden link to another object called its prototype. When a property is not found on the object itself, JavaScript looks at its prototype, then that object's prototype, and so on until the chain ends at `null`.

```js
function Student(name) {
    this.name = name;
}

Student.prototype.sayHi = function () {
    return `Hi, I am ${this.name}`;
};

const s1 = new Student("Ravi");
const s2 = new Student("Simran");

console.log(s1.sayHi());                       // Hi, I am Ravi
console.log(s1.sayHi === s2.sayHi);            // true: one shared function
console.log(Object.getPrototypeOf(s1) === Student.prototype);   // true
```

**Why prototypes matter**: methods placed on the prototype exist once in memory and are shared by all instances, instead of being copied into every object.

**The chain in action**

```js
const arr = [1, 2, 3];
// arr -> Array.prototype -> Object.prototype -> null
console.log(arr.hasOwnProperty("length"));   // true: found on arr itself
console.log(arr.hasOwnProperty("map"));      // false: found on Array.prototype
console.log(typeof arr.toString);            // "function": found on Object.prototype
```

**Relationship with classes**

```js
class Student {
    sayHi() { return "Hi"; }
}
console.log(typeof Student);                   // "function"
console.log(Student.prototype.sayHi !== undefined);   // true
```

Methods written inside a `class` body are placed on `Student.prototype` automatically. `extends` simply links one prototype to another.

---

## 14. DOM Introduction

The DOM (Document Object Model) is the browser's tree representation of an HTML page (introduced in the rendering pipeline in Unit I). JavaScript uses it to read and change page content, structure, and style.

```html
<body>
    <h1 id="title">Hello</h1>
    <p class="note">First</p>
    <p class="note">Second</p>
</body>
```

```
document
  └── html
       └── body
            ├── h1#title
            ├── p.note
            └── p.note
```

The global `document` object is the entry point to everything on the page.

**Node types**: element nodes (tags), text nodes (text inside tags), attribute nodes, comment nodes.

---

## 15. DOM Selection

| Method | Returns | Example |
|---|---|---|
| `getElementById(id)` | One element or `null` | `document.getElementById("title")` |
| `getElementsByClassName(name)` | Live HTMLCollection | `document.getElementsByClassName("note")` |
| `getElementsByTagName(tag)` | Live HTMLCollection | `document.getElementsByTagName("p")` |
| `querySelector(css)` | First match or `null` | `document.querySelector(".note")` |
| `querySelectorAll(css)` | Static NodeList of all matches | `document.querySelectorAll("p.note")` |

`querySelector` and `querySelectorAll` accept any CSS selector from Unit III, which makes them the most flexible and the most commonly used.

```js
const title = document.querySelector("#title");
const notes = document.querySelectorAll(".note");

notes.forEach((n) => console.log(n.textContent));
```

`NodeList` supports `forEach`; for `map`/`filter`, convert first: `Array.from(notes)` or `[...notes]`.

**Navigating the tree**

```js
const el = document.querySelector(".note");
el.parentElement;
el.children;
el.firstElementChild;
el.lastElementChild;
el.nextElementSibling;
el.previousElementSibling;
```

---

## 16. DOM Manipulation

**Changing content**

| Property | Behavior |
|---|---|
| `textContent` | Gets/sets plain text; safe |
| `innerText` | Similar, but aware of CSS visibility |
| `innerHTML` | Gets/sets HTML markup; parses tags |

```js
const title = document.querySelector("#title");
title.textContent = "Welcome to JavaScript";
title.innerHTML = "Welcome to <em>JavaScript</em>";
```

**Security note**: never put user-typed text into `innerHTML`. A user could type `<img src=x onerror="alert(1)">` and run script on the page (an XSS attack). Use `textContent` for untrusted text.

**Changing attributes**

```js
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.getAttribute("href");
link.removeAttribute("target");
link.href = "https://example.com";   // direct property also works

const img = document.querySelector("img");
img.src = "new.png";
img.alt = "New description";
```

**Changing styles**

```js
const box = document.querySelector(".box");
box.style.backgroundColor = "tomato";   // CSS property names become camelCase
box.style.fontSize = "20px";
```

**Working with classes (preferred over inline styles)**

```js
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");           // add if absent, remove if present
box.classList.contains("active");       // true or false
```

```css
.active { border: 2px solid green; }
```

**Creating, inserting, and removing elements**

```js
const list = document.querySelector("#taskList");

const li = document.createElement("li");   // create
li.textContent = "Learn DOM";              // set content
li.classList.add("task");                  // set class
list.appendChild(li);                      // insert at the end

list.prepend(li);                          // insert at the start
list.append("text or elements");           // append multiple/text
li.remove();                               // remove the element itself
list.removeChild(li);                      // older way
list.insertBefore(newEl, referenceEl);     // insert before a reference node
```

**Data attributes**: store custom data in HTML, read it in JavaScript.

```html
<li data-id="42" data-status="done">Task</li>
```

```js
const item = document.querySelector("li");
console.log(item.dataset.id);       // "42"
item.dataset.status = "pending";
```

**Rendering a list from data (the pattern behind Experiments 4 and 5)**

```html
<ul id="result"></ul>
```

```js
const students = [
    { name: "Ravi", total: 395 },
    { name: "Simran", total: 451 }
];

const ul = document.querySelector("#result");
ul.innerHTML = "";   // clear old content before re-rendering

students.forEach((s, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${s.name} - ${s.total}`;
    ul.appendChild(li);
});
```

---

## 17. Events

An event is something that happens on the page: a click, a key press, a form submission, a page load. JavaScript can listen for events and run a function (an event handler) in response.

**Registering listeners**

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    console.log("Button clicked");
});

btn.addEventListener("click", () => {
    btn.textContent = "Clicked";
});
```

`addEventListener` is preferred over `onclick = ...` or inline `onclick="..."` because it allows multiple handlers for the same event and keeps JS out of the HTML.

**Removing a listener** (requires a named function)

```js
function handleClick() { console.log("hi"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

**Common events**

| Category | Events |
|---|---|
| Mouse | `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove` |
| Keyboard | `keydown`, `keyup` |
| Form | `submit`, `input`, `change`, `focus`, `blur` |
| Page | `DOMContentLoaded`, `load`, `scroll`, `resize` |

**The event object**: every handler receives an object describing the event.

```js
document.addEventListener("keydown", (event) => {
    console.log(event.key);      // e.g. "Enter", "a"
});

btn.addEventListener("click", (event) => {
    console.log(event.target);   // the element that was clicked
    console.log(event.type);     // "click"
});
```

**preventDefault**: stops the browser's default action (such as a form submitting and reloading the page, or a link navigating).

```js
link.addEventListener("click", (e) => {
    e.preventDefault();
});
```

**Event bubbling and delegation**

When an event happens on an element, it fires on that element and then "bubbles" up through its parents.

```html
<ul id="list">
    <li>One</li>
    <li>Two</li>
</ul>
```

Instead of attaching a listener to every `<li>`, attach one to the parent and check `event.target`:

```js
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
});
```

Benefits: fewer listeners, and it also works for items added later by JavaScript. This is the recommended technique for editing, toggling, and deleting cards in Experiments 5 and 6.

**Using `closest`** to find the card that a clicked inner button belongs to:

```js
container.addEventListener("click", (e) => {
    if (e.target.matches(".delete-btn")) {
        e.target.closest(".card").remove();
    }
});
```

**Waiting for the DOM**

```js
document.addEventListener("DOMContentLoaded", () => {
    // safe to select elements here
});
```

Not needed when the script uses `defer`.

---

## 18. Form Handling

Forms combine HTML inputs (Unit II) with JavaScript for validation and processing.

```html
<form id="signup">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <p id="usernameError" class="error"></p>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label><input type="checkbox" id="terms"> I agree</label>

    <select id="course">
        <option value="web">Web Development</option>
        <option value="py">Python</option>
    </select>

    <button type="submit">Register</button>
</form>
```

**Reading input values**

```js
const username = document.querySelector("#username").value;
const agreed = document.querySelector("#terms").checked;      // checkbox: boolean
const course = document.querySelector("#course").value;       // selected option's value
const gender = document.querySelector('input[name="gender"]:checked')?.value;   // radio group
```

Values from `<input>` are always **strings**, even for `type="number"`; convert with `Number()` when calculating.

**Handling submission**

```js
const form = document.querySelector("#signup");

form.addEventListener("submit", (e) => {
    e.preventDefault();          // stop the page from reloading

    const username = form.username.value.trim();
    const errorBox = document.querySelector("#usernameError");

    if (username.length < 4) {
        errorBox.textContent = "Username must be at least 4 characters";
        return;
    }

    errorBox.textContent = "";
    console.log("Valid, submitting:", username);
});
```

**Live feedback with the `input` event**

```js
document.querySelector("#username").addEventListener("input", (e) => {
    document.querySelector("#count").textContent = e.target.value.length;
});
```

**`input` vs `change`**: `input` fires on every keystroke; `change` fires when the value is committed (on blur for text fields, immediately for checkboxes and selects).

**Collecting all fields at once with FormData**

```js
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    console.log(data);   // { username: "...", email: "..." }
});
```

**Validation checklist**
1. Trim the input and check for emptiness.
2. Check format (length, regular expression, range).
3. Show a specific message next to the field.
4. Do not submit until every rule passes.
5. Remember that client-side validation improves user experience but does not provide security; the server must validate again.

**Simple regular-expression example**

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("ravi@example.com"));   // true
console.log(emailPattern.test("ravi@"));              // false
```

**Built-in validation API**

```js
if (!form.checkValidity()) {
    form.reportValidity();   // shows the browser's own messages from required/minlength/pattern
}
```

---

## 19. localStorage

`localStorage` stores key-value data in the browser. Data persists after the page is refreshed and after the browser is closed, until it is cleared.

| Method | Purpose |
|---|---|
| `localStorage.setItem(key, value)` | Save data |
| `localStorage.getItem(key)` | Read data (returns `null` if missing) |
| `localStorage.removeItem(key)` | Delete one key |
| `localStorage.clear()` | Delete everything for this site |

```js
localStorage.setItem("username", "Ravi");
console.log(localStorage.getItem("username"));   // "Ravi"
localStorage.removeItem("username");
```

**Important limits**
- Only **strings** can be stored; objects and arrays must be converted with `JSON.stringify` and restored with `JSON.parse`.
- About 5 MB per site; data is stored per origin (protocol + domain + port).
- Synchronous and unencrypted: never store passwords, tokens, or sensitive data.

```js
const tasks = [
    { id: 1, text: "Learn DOM", done: false },
    { id: 2, text: "Build To-Do app", done: true }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const saved = JSON.parse(localStorage.getItem("tasks"));
console.log(saved[0].text);   // "Learn DOM"
```

**Safe loading pattern with a default value**

```js
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

`JSON.parse(null)` returns `null`, so `|| []` gives an empty array on first visit.

**localStorage vs sessionStorage vs cookies**

| Feature | localStorage | sessionStorage | Cookies |
|---|---|---|---|
| Lifetime | Until cleared | Until the tab is closed | Set by expiry date |
| Size | About 5 MB | About 5 MB | About 4 KB |
| Sent to server automatically | No | No | Yes, with every request |

**Inspecting storage**: DevTools, Application tab, Local Storage (introduced in Unit I).

---

## 20. Putting It Together: State, Render, Persist

Almost every interactive page follows one loop: keep the data in a variable, draw the page from that data, and update the data when the user acts.

```html
<form id="taskForm">
    <input type="text" id="taskInput" placeholder="New task" required>
    <button type="submit">Add</button>
</form>
<ul id="taskList"></ul>
```

```js
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
    list.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.dataset.id = task.id;
        li.textContent = task.text;
        if (task.done) li.classList.add("done");

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete-btn");
        li.appendChild(del);

        list.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    tasks.push({ id: Date.now(), text, done: false });
    input.value = "";
    save();
    render();
});

list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.matches(".delete-btn")) {
        tasks = tasks.filter((t) => t.id !== id);
    } else {
        const task = tasks.find((t) => t.id === id);
        task.done = !task.done;
    }
    save();
    render();
});

render();   // draw saved tasks on page load
```

Flow: **state** (`tasks` array) changes, then `save()` persists it, then `render()` redraws the page. Each button handler only edits the array; it never edits the page directly. This "state, then render" habit is the base for Unit V, and it is exactly what Experiments 4, 5 and 6 require.

---

## Summary of Unit IV

- JavaScript adds behavior to a page; scripts should be external and loaded with `defer`.
- Use `const` by default, `let` when reassignment is needed, and avoid `var`; `const` blocks reassignment, not mutation.
- Primitive types (string, number, boolean, undefined, null, bigint, symbol) are copied by value; objects and arrays are reference types.
- Use `===` and `!==` for comparison; know the falsy values, and use `??` and `?.` for safe defaults and safe property access.
- Conditionals (`if`, `switch`, ternary) and loops (`for`, `while`, `do...while`, `for...of`, `for...in`) control program flow.
- Strings are immutable and come with methods such as `slice`, `split`, `includes`, `replace`, and template literals for embedding values.
- Functions can be declared, expressed, or written as arrows; they support default and rest parameters, can be passed as callbacks, and form closures over their outer scope.
- Scope is global, function, or block; `let` and `const` are block-scoped.
- Arrays are manipulated with `push`, `pop`, `splice`, `slice`, and the higher-order methods `forEach`, `map`, `filter`, `find`, `some`, `every`, and `reduce`.
- Objects hold key-value data and methods; arrays of objects are the standard data shape; `JSON.stringify` and `JSON.parse` convert between objects and strings.
- Classes provide a blueprint for objects with a `constructor`, methods, `extends`/`super`, and static members; underneath, they use the prototype chain.
- The DOM is the tree of the page: select with `querySelector`/`querySelectorAll`, change with `textContent`, attributes, `classList`, and `createElement`/`append`/`remove`.
- Events are handled with `addEventListener`; the event object, `preventDefault`, bubbling, and event delegation are the key tools.
- Forms are handled by listening to `submit`, calling `preventDefault`, reading `.value`, validating, and showing messages; client-side validation is a convenience, not security.
- `localStorage` persists string data across refreshes; objects must be converted with JSON.
- The state, save, render pattern ties everything together and prepares the ground for working with data and APIs in Unit V.
