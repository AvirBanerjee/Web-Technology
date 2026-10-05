# Unit III: CSS Fundamentals and Layout

## 1. Where to Write CSS

Before covering selectors and properties, it is important to know the three ways CSS can be applied to an HTML page.

**Inline CSS** — written directly inside an element's `style` attribute. Applies only to that one element.

```html
<p style="color: blue; font-size: 18px;">This is a paragraph.</p>
```

**Internal CSS** — written inside a `<style>` tag in the `<head>` of the HTML document. Applies to the whole page.

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```

**External CSS** — written in a separate `.css` file and linked using `<link>`. This is the recommended approach for real projects, since it separates content (HTML) from presentation (CSS) and can be reused across multiple pages.

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
p {
    color: blue;
    font-size: 18px;
}
```

---

## 2. Selectors

A selector tells the browser which HTML element(s) a CSS rule should apply to.

**Basic selectors**

| Selector | Syntax | Example | Applies to |
|---|---|---|---|
| Universal | `*` | `* { margin: 0; }` | Every element on the page |
| Type/Element | `tagname` | `p { color: red; }` | Every `<p>` element |
| Class | `.classname` | `.btn { padding: 10px; }` | Every element with `class="btn"` |
| ID | `#idname` | `#header { height: 80px; }` | The single element with `id="header"` |
| Grouping | `a, b, c` | `h1, h2, h3 { font-family: sans-serif; }` | All listed selectors share the same rule |

```html
<p class="intro">Welcome</p>
<p id="footer-text">Copyright 2026</p>
```

```css
p { line-height: 1.5; }          /* every paragraph */
.intro { font-weight: bold; }     /* only the one with class="intro" */
#footer-text { font-size: 12px; } /* only the one with id="footer-text" */
```

**Combinators** — select elements based on their relationship to other elements.

| Combinator | Syntax | Meaning |
|---|---|---|
| Descendant | `A B` | Selects any `B` inside `A`, at any nesting depth |
| Child | `A > B` | Selects `B` only if it is a direct child of `A` |
| Adjacent sibling | `A + B` | Selects `B` only if it comes immediately after `A`, same parent |
| General sibling | `A ~ B` | Selects every `B` that comes after `A`, same parent |

```css
nav a { color: white; }        /* any <a> inside <nav>, however deeply nested */
ul > li { list-style: none; }  /* only <li> that are direct children of <ul> */
h2 + p { margin-top: 0; }      /* only the <p> immediately after an <h2> */
h2 ~ p { color: gray; }        /* every <p> that follows an <h2>, same parent */
```

**Attribute selectors** — select elements based on the presence or value of an attribute.

```css
input[type="text"] { border: 1px solid gray; }
a[target="_blank"] { color: orange; }
input[required] { border-color: red; }
```

---

## 3. Colors

CSS supports several ways to specify color values.

| Format | Example | Notes |
|---|---|---|
| Named colors | `color: red;` | 140+ predefined keyword names |
| Hexadecimal | `color: #ff0000;` | 6-digit (or shorthand 3-digit `#f00`), most common in real projects |
| RGB | `color: rgb(255, 0, 0);` | Red, Green, Blue, each 0–255 |
| RGBA | `color: rgba(255, 0, 0, 0.5);` | RGB plus alpha (opacity), 0 (transparent) to 1 (opaque) |
| HSL | `color: hsl(0, 100%, 50%);` | Hue (0–360 degrees), Saturation (%), Lightness (%) |
| HSLA | `color: hsla(0, 100%, 50%, 0.5);` | HSL plus alpha |

```css
.box {
    background-color: #1f4e79;
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid hsl(210, 50%, 40%);
}
```

RGBA/HSLA are commonly used when an element needs partial transparency, such as a semi-transparent overlay on an image.

---

## 4. Typography

CSS properties that control how text looks.

| Property | Purpose | Example |
|---|---|---|
| `font-family` | Sets the typeface | `font-family: "Segoe UI", Arial, sans-serif;` |
| `font-size` | Sets text size | `font-size: 16px;` |
| `font-weight` | Sets boldness | `font-weight: bold;` or `font-weight: 700;` |
| `font-style` | Italic or normal | `font-style: italic;` |
| `line-height` | Vertical spacing between lines of text | `line-height: 1.6;` |
| `letter-spacing` | Horizontal spacing between characters | `letter-spacing: 1px;` |
| `text-align` | Horizontal alignment | `text-align: center;` |
| `text-decoration` | Underline, strikethrough, none | `text-decoration: none;` |
| `text-transform` | Changes letter case | `text-transform: uppercase;` |

```css
body {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #222222;
}

h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

a {
    text-decoration: none;
}
```

**Font family fallback list**: Listing multiple fonts separated by commas lets the browser fall back to the next one if the first is not installed on the user's device. The last entry is usually a generic family (`sans-serif`, `serif`, `monospace`) as a safety net.

---

## 5. Cascade, Specificity, and Inheritance

These three concepts together explain how the browser decides which CSS rule wins when multiple rules target the same element.

### 5.1 Cascade

"Cascading" in CSS refers to the order in which rules are applied. When multiple rules could apply to the same element, the browser resolves conflicts using this general order of priority (lowest to highest):

1. Browser's default (user-agent) styles
2. External and internal stylesheet rules, in the order they appear (later rules override earlier ones if specificity is equal)
3. Inline styles (`style="..."` attribute)
4. Rules marked `!important`

```css
p { color: blue; }
p { color: green; }   /* this wins — same specificity, declared later */
```

### 5.2 Specificity

When two rules have equal position in the cascade but both target the same element, specificity decides the winner. Specificity is calculated by counting selector types:

| Selector type | Weight |
|---|---|
| Inline style | Highest (1000) |
| ID selector | 100 |
| Class, attribute, pseudo-class selectors | 10 |
| Type/element, pseudo-element selectors | 1 |
| Universal selector `*` | 0 |

```css
p { color: black; }              /* specificity: 1 (type) */
.intro { color: blue; }          /* specificity: 10 (class) */
#main-text { color: red; }       /* specificity: 100 (id) */
```

```html
<p id="main-text" class="intro">Hello</p>
```

In this example, the text renders **red**, because `#main-text` (specificity 100) outweighs `.intro` (specificity 10) and `p` (specificity 1), regardless of the order the rules are written in.

**`!important`**: overrides normal specificity rules entirely.

```css
p { color: black !important; }
```

This rule wins over any other color rule on that `<p>`, no matter how specific the other selector is. `!important` should be used sparingly, since it makes CSS harder to override and debug later.

### 5.3 Inheritance

Some CSS properties are automatically inherited by child elements from their parent, while others are not.

**Typically inherited**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`.

**Typically NOT inherited**: `margin`, `padding`, `border`, `background`, `width`, `height`, `display`.

```css
body {
    font-family: Arial, sans-serif;
    color: #333;
}
```

Every element inside `<body>` (paragraphs, headings, list items, etc.) automatically uses this font and color unless overridden, because these properties are inheritable. A `border` set on `body`, however, would not automatically appear around every child element.

**Forcing inheritance**: the `inherit` keyword can be used to explicitly inherit a property that normally would not be inherited.

```css
div { border: inherit; }
```

---

## 6. Box Model

Every HTML element is treated by the browser as a rectangular box. The CSS box model describes the parts of that box, from innermost to outermost.

```
┌─────────────────────────────┐
│          margin               │
│  ┌─────────────────────────┐  │
│  │        border             │  │
│  │  ┌─────────────────────┐ │  │
│  │  │      padding          │ │  │
│  │  │  ┌─────────────────┐ │ │  │
│  │  │  │     content       │ │ │  │
│  │  │  └─────────────────┘ │ │  │
│  │  └─────────────────────┘ │  │
│  └─────────────────────────┘  │
└─────────────────────────────┘
```

| Part | Meaning |
|---|---|
| Content | The actual text/image/element content, sized by `width` and `height` |
| Padding | Space between the content and the border, inside the element |
| Border | A line surrounding the padding and content |
| Margin | Space outside the border, separating this element from neighboring elements |

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    margin: 15px;
}
```

**Shorthand values**: `margin` and `padding` accept 1 to 4 values.

```css
margin: 10px;                 /* all four sides */
margin: 10px 20px;            /* top/bottom = 10px, left/right = 20px */
margin: 10px 20px 15px;       /* top = 10px, left/right = 20px, bottom = 15px */
margin: 10px 20px 15px 5px;   /* top, right, bottom, left (clockwise) */
```

**`box-sizing`**: By default (`content-box`), `width` and `height` apply only to the content area, so padding and border add extra size on top. Setting `box-sizing: border-box` makes `width` and `height` include padding and border, which is generally easier to work with.

```css
* {
    box-sizing: border-box;
}
```

```css
/* content-box (default): actual rendered width = 300 + 40 (padding) + 4 (border) = 344px */
.box-a {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}

/* border-box: actual rendered width = exactly 300px (padding and border included) */
.box-b {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}
```

---

## 7. Display Properties

The `display` property controls how an element behaves in the page's layout flow.

| Value | Behavior |
|---|---|
| `block` | Takes up the full width available, starts on a new line (e.g., `<div>`, `<p>`, `<h1>`) |
| `inline` | Takes up only as much width as its content needs, does not start on a new line, ignores `width`/`height` (e.g., `<span>`, `<a>`) |
| `inline-block` | Like `inline` (sits in line with text/other elements) but respects `width`, `height`, `margin`, `padding` |
| `none` | Removes the element from the page entirely; it takes up no space |
| `flex` | Turns the element into a flex container (see Section 8) |
| `grid` | Turns the element into a grid container (see Section 9) |

```css
.inline-item { display: inline; }
.block-item { display: block; }
.badge { display: inline-block; width: 60px; height: 20px; }
.hidden { display: none; }
```

**Difference between `display: none` and `visibility: hidden`**: `display: none` removes the element from the layout completely (surrounding elements shift to fill the gap), while `visibility: hidden` hides the element visually but still reserves its space in the layout.

**Positioning (related concept)**

| Value | Behavior |
|---|---|
| `static` | Default; element follows normal document flow |
| `relative` | Element stays in normal flow but can be shifted using `top`/`left`/`right`/`bottom`, relative to its own original position |
| `absolute` | Element is removed from normal flow and positioned relative to the nearest ancestor with `position` other than `static` |
| `fixed` | Element is positioned relative to the browser window and stays in place even when scrolling |
| `sticky` | Element behaves like `relative` until a scroll threshold is reached, then behaves like `fixed` |

```css
.parent {
    position: relative;
}
.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

---

## 8. Flexbox Layout

Flexbox (Flexible Box Layout) is a one-dimensional layout system designed for arranging items in a row or column, with powerful alignment and spacing control.

**Enabling flexbox**: set `display: flex` on the parent (flex container). Its direct children automatically become flex items.

```html
<div class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</div>
```

```css
.nav {
    display: flex;
}
```

### 8.1 Container Properties (applied to the parent)

| Property | Purpose | Common values |
|---|---|---|
| `flex-direction` | Main axis direction | `row` (default), `row-reverse`, `column`, `column-reverse` |
| `justify-content` | Alignment along the main axis | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Alignment along the cross axis | `flex-start`, `center`, `flex-end`, `stretch` (default), `baseline` |
| `flex-wrap` | Whether items wrap to a new line | `nowrap` (default), `wrap`, `wrap-reverse` |
| `gap` | Spacing between flex items | `gap: 16px;` |

```css
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
```

**Visualizing `justify-content`** (main axis = horizontal, assuming `flex-direction: row`):

```
flex-start:     [A][B][C]
center:              [A][B][C]
flex-end:                 [A][B][C]
space-between:  [A]      [B]      [C]
space-around:     [A]    [B]    [C]
```

### 8.2 Item Properties (applied to children)

| Property | Purpose |
|---|---|
| `flex-grow` | How much an item grows relative to siblings when extra space is available (default 0) |
| `flex-shrink` | How much an item shrinks relative to siblings when space is tight (default 1) |
| `flex-basis` | The item's starting size before growing/shrinking |
| `order` | Changes the visual order without changing HTML order (default 0) |
| `align-self` | Overrides `align-items` for a single item |

```css
.item-1 { flex-grow: 2; }  /* grows twice as fast as a sibling with flex-grow: 1 */
.item-2 { flex-grow: 1; }
.item-3 { order: -1; }      /* moves this item before others, visually */
```

**Practical example: a responsive navigation bar**

```html
<nav class="navbar">
    <div class="logo">MySite</div>
    <div class="links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
}

.links {
    display: flex;
    gap: 25px;
}
```

---

## 9. CSS Grid Layout

CSS Grid is a two-dimensional layout system, controlling rows and columns at the same time, making it well suited for full page layouts.

**Enabling grid**: set `display: grid` on the parent (grid container).

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
    gap: 10px;
}
```

### 9.1 Defining the Grid Structure

| Property | Purpose |
|---|---|
| `grid-template-columns` | Defines number and size of columns |
| `grid-template-rows` | Defines number and size of rows |
| `gap` (or `row-gap` / `column-gap`) | Spacing between grid cells |
| `grid-template-areas` | Names regions of the grid for easy placement |

**Using the `fr` unit**: `fr` stands for "fraction," representing a share of the available space.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}
```

Here, the middle column gets twice the space of the first and third columns, and this ratio adjusts automatically as the container resizes.

**`repeat()` function**: shorthand for repeating column/row definitions.

```css
.container {
    grid-template-columns: repeat(4, 1fr); /* 4 equal-width columns */
}
```

### 9.2 Placing Items on the Grid

Children of a grid container can be placed using line numbers.

```css
.item-a {
    grid-column: 1 / 3;  /* spans from column line 1 to column line 3 (2 columns wide) */
    grid-row: 1 / 2;
}
```

**Named grid areas** — a readable way to define a page layout.

```html
<div class="layout">
    <header>Header</header>
    <nav>Sidebar</nav>
    <main>Main Content</main>
    <footer>Footer</footer>
</div>
```

```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav    main"
        "footer footer";
    gap: 10px;
    min-height: 100vh;
}

header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

This single block of CSS builds the classic header/sidebar/main/footer layout referenced in Experiment 3 of the syllabus, without needing nested wrapper `<div>`s purely for layout purposes.

### 9.3 Flexbox vs Grid — When to Use Which

| Flexbox | Grid |
|---|---|
| One-dimensional (a single row or column) | Two-dimensional (rows and columns together) |
| Best for: navbars, button groups, aligning items within a component | Best for: full page layouts, image galleries, dashboards |
| Content size often drives layout | Layout structure is defined first, content fits into it |

---

## 10. Responsive Design Using Media Queries

Responsive design means a page adapts its layout depending on the screen size of the device viewing it (mobile, tablet, desktop).

**Media query syntax**

```css
@media (max-width: 768px) {
    /* styles here apply only when viewport width is 768px or less */
}
```

**Common breakpoints** (these are conventions, not fixed rules):

| Device category | Typical max-width |
|---|---|
| Mobile | up to 480px – 600px |
| Tablet | up to 768px – 1024px |
| Desktop | above 1024px |

**Example: three responsive breakpoints for a layout**

```css
/* Base styles: apply to all screen sizes, mobile-first approach */
.container {
    display: flex;
    flex-direction: column;
}

/* Tablet and above */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}

/* Desktop and above */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

**Mobile-first vs desktop-first**
- Mobile-first: base CSS targets the smallest screens, then `min-width` media queries add complexity for larger screens (as shown above). This is the generally recommended modern approach.
- Desktop-first: base CSS targets the largest screens, then `max-width` media queries simplify the layout for smaller screens.

**The viewport meta tag** (from Unit II, relevant here): without `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in the HTML `<head>`, mobile browsers render the page at a desktop width and shrink it, making media queries behave incorrectly.

**Responsive grid example**

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

@media (max-width: 768px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .gallery {
        grid-template-columns: 1fr;
    }
}
```

This gallery shows 4 columns on desktop, 2 columns on tablets, and a single column stacked on mobile.

---

## 11. Pseudo-Classes and Pseudo-Elements

### 11.1 Pseudo-Classes

A pseudo-class selects an element based on its state or position, using a single colon (`:`).

| Pseudo-class | Selects |
|---|---|
| `:hover` | Element while the mouse pointer is over it |
| `:focus` | Element while it has keyboard focus (e.g., an input being typed into) |
| `:active` | Element while it is being clicked/pressed |
| `:visited` | A link that has already been visited |
| `:first-child` | An element that is the first child of its parent |
| `:last-child` | An element that is the last child of its parent |
| `:nth-child(n)` | An element at a specific position among its siblings |
| `:not(selector)` | An element that does NOT match the given selector |
| `:checked` | A checkbox/radio input that is currently checked |
| `:disabled` | A form element that is disabled |

```css
button:hover {
    background-color: #1f4e79;
    cursor: pointer;
}

input:focus {
    outline: 2px solid blue;
}

li:nth-child(odd) {
    background-color: #f2f2f2;
}

li:first-child {
    font-weight: bold;
}

button:not(.disabled) {
    cursor: pointer;
}
```

**`nth-child` patterns**

```css
li:nth-child(2) { }        /* exactly the 2nd item */
li:nth-child(odd) { }      /* 1st, 3rd, 5th... */
li:nth-child(even) { }     /* 2nd, 4th, 6th... */
li:nth-child(3n) { }       /* every 3rd item: 3rd, 6th, 9th... */
```

### 11.2 Pseudo-Elements

A pseudo-element targets a specific part of an element, or generates content that is not literally in the HTML, using a double colon (`::`).

| Pseudo-element | Selects/Generates |
|---|---|
| `::before` | Inserts generated content immediately before the element's actual content |
| `::after` | Inserts generated content immediately after the element's actual content |
| `::first-letter` | The first letter of the element's text |
| `::first-line` | The first line of the element's text |
| `::placeholder` | The placeholder text of an input field |

```css
.required::after {
    content: " *";
    color: red;
}

blockquote::before {
    content: open-quote;
}

p::first-letter {
    font-size: 200%;
    font-weight: bold;
}

input::placeholder {
    color: #999;
    font-style: italic;
}
```

`::before` and `::after` require the `content` property to render anything; without it, they produce no output even if other styles are set.

---

## 12. Transitions and Transforms

### 12.1 Transitions

Transitions animate a property smoothly from one value to another over a specified duration, instead of changing instantly.

```css
.button {
    background-color: #1f4e79;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #163a5c;
}
```

**Transition shorthand**: `transition: property duration timing-function delay;`

| Part | Example | Meaning |
|---|---|---|
| `property` | `background-color`, `all` | Which property to animate |
| `duration` | `0.3s`, `300ms` | How long the animation takes |
| `timing-function` | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` | Speed curve of the animation |
| `delay` | `0.1s` | Wait time before the animation starts |

```css
.card {
    transform: scale(1);
    transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
```

Multiple properties can be transitioned at once, separated by commas, each with its own timing if needed.

### 12.2 Transforms

The `transform` property applies visual transformations to an element without affecting the layout of surrounding elements.

| Function | Effect | Example |
|---|---|---|
| `translate(x, y)` | Moves the element | `transform: translate(20px, 10px);` |
| `scale(x, y)` | Resizes the element | `transform: scale(1.2);` |
| `rotate(angle)` | Rotates the element | `transform: rotate(45deg);` |
| `skew(x, y)` | Slants the element | `transform: skew(10deg, 5deg);` |

```css
.icon {
    transition: transform 0.3s ease;
}

.icon:hover {
    transform: rotate(20deg) scale(1.1);
}
```

Multiple transform functions can be combined in a single declaration, applied in the order written.

---

## 13. CSS Variables (Custom Properties)

CSS variables let a value be defined once and reused throughout a stylesheet, making large projects easier to maintain and re-theme.

**Defining variables**: typically declared inside `:root`, a pseudo-class representing the document's root element, so the variables are available globally.

```css
:root {
    --primary-color: #1f4e79;
    --secondary-color: #f2a71b;
    --base-font-size: 16px;
    --spacing-unit: 8px;
}
```

**Using variables**: accessed with the `var()` function.

```css
body {
    font-size: var(--base-font-size);
}

.button {
    background-color: var(--primary-color);
    padding: calc(var(--spacing-unit) * 2);
}

.button:hover {
    background-color: var(--secondary-color);
}
```

**Fallback values**: `var()` accepts a second argument used if the variable is not defined.

```css
.box {
    color: var(--text-color, black);
}
```

**Why variables matter**: changing a single `:root` value (e.g., `--primary-color`) updates every element referencing it throughout the entire stylesheet, instead of manually finding and replacing every occurrence of a color or size.

---

## 14. Organizing CSS

As stylesheets grow, structure and naming conventions become important for maintainability.

**General practices**

- Group related rules together (e.g., all typography rules, then all layout rules, then all component rules).
- Use comments to divide sections of a large stylesheet.

```css
/* ===== Variables ===== */
:root {
    --primary-color: #1f4e79;
}

/* ===== Base/Reset Styles ===== */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ===== Typography ===== */
body {
    font-family: Arial, sans-serif;
}

/* ===== Layout ===== */
.container {
    display: flex;
}

/* ===== Components ===== */
.button {
    background-color: var(--primary-color);
}
```

**Naming conventions**: A common approach is the BEM (Block Element Modifier) convention, which makes class names self-descriptive and avoids specificity conflicts.

```html
<div class="card">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description text</p>
    <button class="card__button card__button--primary">Buy Now</button>
</div>
```

```css
.card { }
.card__title { }          /* Element: a part of the card block */
.card__description { }
.card__button { }
.card__button--primary { } /* Modifier: a variation of the button element */
```

| Part | Syntax | Meaning |
|---|---|---|
| Block | `.card` | Standalone component |
| Element | `.card__title` | A part of the block, joined with double underscore |
| Modifier | `.card__button--primary` | A variation of a block/element, joined with double hyphen |

**Splitting CSS into multiple files** (for larger projects): separate files such as `variables.css`, `base.css`, `layout.css`, and `components.css` can be linked individually, or combined using a build tool. For the scope of this course, a single well-organized external stylesheet, commented and grouped as shown above, is sufficient.

---

## Summary of Unit III

- CSS can be written inline, internally, or externally; external stylesheets are standard practice for real projects.
- Selectors (type, class, ID, combinators, attribute selectors) determine which elements a rule targets.
- Colors can be expressed as named keywords, hex, RGB(A), or HSL(A) values.
- Typography properties (`font-family`, `font-size`, `line-height`, etc.) control how text is displayed.
- The cascade, specificity, and inheritance together determine which rule wins when multiple rules conflict.
- The box model (content, padding, border, margin) defines the size and spacing of every element; `box-sizing: border-box` simplifies sizing calculations.
- `display` controls layout behavior (`block`, `inline`, `inline-block`, `none`, `flex`, `grid`), and `position` controls how an element is placed relative to its normal flow.
- Flexbox handles one-dimensional layouts (rows or columns) with properties like `justify-content`, `align-items`, and `flex-wrap`.
- CSS Grid handles two-dimensional layouts (rows and columns together), including named `grid-template-areas` for full-page layouts.
- Media queries (`@media`) enable responsive design, typically following a mobile-first approach with `min-width` breakpoints.
- Pseudo-classes (`:hover`, `:nth-child`, etc.) target element states and positions; pseudo-elements (`::before`, `::after`, etc.) target sub-parts of an element or insert generated content.
- Transitions animate property changes smoothly; transforms (`translate`, `scale`, `rotate`, `skew`) visually reposition or resize elements without affecting layout.
- CSS variables (`--name`, accessed via `var()`) centralize reusable values for easier maintenance and theming.
- Organizing CSS with comments, logical grouping, and naming conventions like BEM keeps larger stylesheets maintainable.