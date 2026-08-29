# Unit II: HTML Fundamentals

## 1. Document Structure

HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. Every HTML document follows a fixed skeleton.

**Basic HTML document**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

**Breakdown of each part**

| Tag | Purpose |
|---|---|
| `<!DOCTYPE html>` | Declares the document as HTML5. Must be the first line. Without it, browsers may render in "quirks mode" with inconsistent behavior. |
| `<html lang="en">` | Root element wrapping the entire page. `lang` attribute helps browsers, screen readers, and search engines identify the page language. |
| `<head>` | Contains metadata: not displayed directly on the page, but used by the browser, search engines, and social media. |
| `<meta charset="UTF-8">` | Defines character encoding so special characters (currency symbols, accented letters, emojis) render correctly. |
| `<meta name="viewport" ...>` | Controls how the page scales on mobile devices. Essential for responsive design (covered in Unit III). |
| `<title>` | Text shown in the browser tab and used as the default heading in search engine results. |
| `<body>` | Contains all visible content of the page: text, images, links, forms, etc. |

**Nesting and indentation**
- HTML elements can be nested inside other elements, forming a tree structure (this tree is what becomes the DOM, as covered in Unit I).
- Proper indentation (2 or 4 spaces per nesting level) is a convention, not a syntax requirement, but it is essential for readability.

```html
<body>
    <header>
        <h1>Site Title</h1>
    </header>
    <main>
        <p>Content goes here.</p>
    </main>
</body>
```

---

## 2. Elements and Attributes

**Element**: A complete unit consisting of an opening tag, content, and a closing tag.

```html
<p>This is a paragraph.</p>
```

- `<p>` — opening tag
- `This is a paragraph.` — content
- `</p>` — closing tag

**Void (self-closing) elements**: Some elements have no content and no closing tag, e.g., `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`.

```html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
```

**Attribute**: Extra information added inside the opening tag, always in `name="value"` format.

```html
<a href="https://example.com" target="_blank" title="Visit Example">Click here</a>
```

| Attribute | Meaning |
|---|---|
| `href` | Destination URL for the link |
| `target="_blank"` | Opens the link in a new tab |
| `title` | Tooltip text shown on hover |

**Global attributes** (usable on almost any HTML element):

| Attribute | Purpose |
|---|---|
| `id` | Unique identifier for an element (used once per page), often used by CSS/JS |
| `class` | Assigns one or more class names, reusable across multiple elements, used mainly by CSS |
| `style` | Inline CSS applied directly to the element |
| `title` | Tooltip text on hover |
| `data-*` | Custom data attributes for storing extra information, accessible via JavaScript |
| `hidden` | Hides the element from the page |

```html
<div id="main-banner" class="banner highlight" data-user-id="204">
    Welcome!
</div>
```

---

## 3. Text Elements

HTML provides multiple tags for structuring and emphasizing text content.

**Headings** — six levels, `<h1>` (most important) to `<h6>` (least important). Only one `<h1>` should typically be used per page (main title).

```html
<h1>Main Title</h1>
<h2>Section Heading</h2>
<h3>Sub-section Heading</h3>
```

**Paragraphs**

```html
<p>This is a paragraph of text describing something important.</p>
```

**Text-level (inline) formatting**

| Tag | Purpose |
|---|---|
| `<strong>` | Marks text as important (renders bold, carries semantic meaning) |
| `<b>` | Bold text with no extra semantic importance (visual only) |
| `<em>` | Emphasized text (renders italic, carries semantic meaning) |
| `<i>` | Italic text with no extra semantic importance (visual only) |
| `<mark>` | Highlighted text |
| `<small>` | Smaller text, often used for fine print |
| `<del>` | Strikethrough, represents deleted text |
| `<ins>` | Underlined, represents inserted text |
| `<sub>` | Subscript text |
| `<sup>` | Superscript text |
| `<br>` | Line break within text |
| `<hr>` | Horizontal rule/divider |

```html
<p>Water is <strong>essential</strong> for life. Chemically it is written as H<sub>2</sub>O.</p>
<p>This offer is <del>500 INR</del> <ins>350 INR</ins> only.</p>
```

**Difference between `<strong>`/`<b>` and `<em>`/`<i>`**: `<strong>` and `<em>` communicate meaning to screen readers and search engines (semantic), while `<b>` and `<i>` only change visual appearance with no added meaning.

---

## 4. Links

The anchor tag `<a>` creates hyperlinks, the foundation of the "web" (interlinked documents).

```html
<a href="https://www.google.com">Go to Google</a>
```

**Types of links**

| Type | Example | Use case |
|---|---|---|
| Absolute URL | `<a href="https://example.com/about">About</a>` | Linking to an external website |
| Relative URL | `<a href="about.html">About</a>` | Linking to another page within the same project/folder |
| Same-page anchor | `<a href="#contact">Contact</a>` linking to `<section id="contact">` | Jumping to a section within the same page |
| Email link | `<a href="mailto:hello@example.com">Email us</a>` | Opens the user's default email client |
| Phone link | `<a href="tel:+911234567890">Call us</a>` | Opens the phone dialer on mobile devices |

**Common attributes for links**

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
```

- `target="_blank"` — opens link in a new browser tab.
- `rel="noopener noreferrer"` — security best practice used with `target="_blank"` to prevent the new page from accessing the original page via `window.opener`.

**Relative path examples** (assuming a project structure with `index.html`, `about.html`, and an `images` folder):

```html
<a href="about.html">About</a>                 <!-- same folder -->
<a href="pages/contact.html">Contact</a>        <!-- inside subfolder -->
<a href="../index.html">Home</a>                <!-- one folder up -->
```

---

## 5. Images

```html
<img src="images/logo.png" alt="Company Logo" width="200" height="100">
```

| Attribute | Purpose |
|---|---|
| `src` | Path to the image file (relative or absolute URL) |
| `alt` | Alternative text describing the image; shown if the image fails to load, and read aloud by screen readers. Essential for accessibility. |
| `width` / `height` | Sets image dimensions in pixels; helps the browser reserve space before the image loads, preventing layout shift |

**Why `alt` text matters**
- Accessibility: screen readers announce the `alt` text to visually impaired users.
- SEO: search engines use `alt` text to understand image content.
- Fallback: if the image fails to load (broken link), the `alt` text is displayed instead.

```html
<img src="team-photo.jpg" alt="CodeAcharya training team standing outside the office">
```

**Figure and caption**: used to group an image with a caption semantically.

```html
<figure>
    <img src="chart.png" alt="Bar chart showing quarterly sales">
    <figcaption>Fig 1: Quarterly Sales Report</figcaption>
</figure>
```

---

## 6. Lists

**Unordered list** (bullets, order does not matter):

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

**Ordered list** (numbered, order matters):

```html
<ol>
    <li>Install a code editor</li>
    <li>Write HTML</li>
    <li>Open in browser</li>
</ol>
```

- `<ol>` supports the `type` attribute (`1`, `A`, `a`, `I`, `i`) and `start` attribute to control numbering.

```html
<ol type="A" start="3">
    <li>Item C</li>
    <li>Item D</li>
</ol>
```

**Description list** (term-definition pairs):

```html
<dl>
    <dt>HTML</dt>
    <dd>Markup language used to structure web content.</dd>
    <dt>CSS</dt>
    <dd>Stylesheet language used to style web content.</dd>
</dl>
```

**Nested lists**

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Backend
        <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
        </ul>
    </li>
</ul>
```

---

## 7. Semantic HTML Elements

Semantic elements clearly describe their meaning to both the browser and the developer, as opposed to generic containers like `<div>` and `<span>` which carry no meaning.

**Why semantic HTML matters**
- Accessibility: screen readers can navigate a page more effectively (e.g., jump directly to `<nav>` or `<main>`).
- SEO: search engines weigh content inside semantic tags more meaningfully.
- Readability: code is easier to understand for other developers.

**Common semantic elements**

| Element | Purpose |
|---|---|
| `<header>` | Introductory content or navigation links for a page or section |
| `<nav>` | Navigation links block |
| `<main>` | The primary, unique content of the page (only one per page) |
| `<section>` | A thematic grouping of content, typically with its own heading |
| `<article>` | Self-contained, independently distributable content (blog post, news article, product card) |
| `<aside>` | Content indirectly related to the main content (sidebar, ads, related links) |
| `<footer>` | Footer content for a page or section (copyright, contact info, links) |
| `<figure>` / `<figcaption>` | Groups media content with a caption |
| `<time>` | Represents a specific time/date, machine-readable via `datetime` attribute |

**Example: full semantic page layout**

```html
<body>
    <header>
        <h1>CodeAcharya Blog</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/articles">Articles</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Understanding Semantic HTML</h2>
            <p>Published on <time datetime="2026-08-20">August 20, 2026</time></p>
            <section>
                <h3>Why it matters</h3>
                <p>Semantic tags improve accessibility and SEO...</p>
            </section>
        </article>

        <aside>
            <h3>Related Articles</h3>
            <ul>
                <li><a href="#">CSS Grid Basics</a></li>
                <li><a href="#">JavaScript DOM Guide</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2026 CodeAcharya. All rights reserved.</p>
    </footer>
</body>
```

**`<div>` and `<span>` vs semantic tags**
- `<div>` — generic block-level container, no semantic meaning. Use only when no semantic element fits.
- `<span>` — generic inline container, no semantic meaning. Used for styling small pieces of text.
- Rule of thumb: reach for a semantic tag first; use `<div>`/`<span>` as a fallback for pure layout/styling purposes.

---

## 8. Forms

Forms collect user input and send it to a server for processing.

**Basic form structure**

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Submit</button>
</form>
```

**Form attributes**

| Attribute | Purpose |
|---|---|
| `action` | URL where the form data is sent when submitted |
| `method` | HTTP method used to send data: `GET` (data appended to URL, visible, used for searches/filters) or `POST` (data sent in request body, used for sensitive/large data) |

**`<label>` and accessibility**
- The `for` attribute of `<label>` must match the `id` of its corresponding input.
- This links the label to the input, so clicking the label focuses the input, and screen readers announce the label when the input is focused.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

---

## 9. Input Types

The `<input>` element's `type` attribute determines its behavior and the kind of data collected.

| Type | Example | Use case |
|---|---|---|
| `text` | `<input type="text">` | General single-line text |
| `email` | `<input type="email">` | Email address, browser validates format automatically |
| `password` | `<input type="password">` | Masks characters typed |
| `number` | `<input type="number" min="1" max="10">` | Numeric input with optional min/max/step |
| `tel` | `<input type="tel">` | Phone number, shows numeric keypad on mobile |
| `url` | `<input type="url">` | Web address, validates URL format |
| `date` | `<input type="date">` | Date picker |
| `time` | `<input type="time">` | Time picker |
| `checkbox` | `<input type="checkbox">` | Multiple selections allowed |
| `radio` | `<input type="radio" name="gender">` | Single selection from a group (same `name`) |
| `file` | `<input type="file">` | File upload |
| `range` | `<input type="range" min="0" max="100">` | Slider control |
| `color` | `<input type="color">` | Color picker |
| `hidden` | `<input type="hidden">` | Stores data not shown to the user, sent along with the form |
| `search` | `<input type="search">` | Search box, may show a clear (x) button |
| `submit` | `<input type="submit">` | Submits the form |

**Checkbox and radio example**

```html
<p>Select your interests:</p>
<input type="checkbox" id="html" name="interest" value="html">
<label for="html">HTML</label>
<input type="checkbox" id="css" name="interest" value="css">
<label for="css">CSS</label>

<p>Select your gender:</p>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

Note: checkboxes with the same `name` allow multiple selections; radio buttons with the same `name` allow only one selection from the group.

**Other form elements**

```html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="in">India</option>
    <option value="us">USA</option>
</select>

<label for="bio">Bio:</label>
<textarea id="bio" name="bio" rows="4" cols="30"></textarea>

<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

**Built-in form validation attributes**

| Attribute | Purpose |
|---|---|
| `required` | Field must be filled before submission |
| `minlength` / `maxlength` | Minimum/maximum character length for text input |
| `min` / `max` | Minimum/maximum value for number/date/range inputs |
| `pattern` | Regex pattern the value must match |
| `placeholder` | Hint text shown inside empty input |

```html
<input type="text" name="username" required minlength="4" maxlength="12" placeholder="Enter username">
<input type="text" pattern="[0-9]{10}" title="Enter a 10-digit phone number">
```

**Example: complete form with 8 different input types** (relevant for Experiment 2 in the syllabus)

```html
<form action="/register" method="POST">
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required>

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">

    <label for="course">Course:</label>
    <select id="course" name="course">
        <option value="python">Python</option>
        <option value="webdev">Web Development</option>
    </select>

    <p>Preferred Batch:</p>
    <input type="radio" id="morning" name="batch" value="morning">
    <label for="morning">Morning</label>
    <input type="radio" id="evening" name="batch" value="evening">
    <label for="evening">Evening</label>

    <label for="resume">Upload Resume:</label>
    <input type="file" id="resume" name="resume">

    <button type="submit">Register</button>
</form>
```

---

## 10. Tables

Tables display tabular (row-column) data.

```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ravi</td>
            <td>Python</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Simran</td>
            <td>Web Development</td>
            <td>90</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Average</td>
            <td>87.5</td>
        </tr>
    </tfoot>
</table>
```

**Table elements**

| Tag | Purpose |
|---|---|
| `<table>` | Wraps the entire table |
| `<thead>` | Groups header rows |
| `<tbody>` | Groups body rows (main data) |
| `<tfoot>` | Groups footer rows (summary, totals) |
| `<tr>` | Table row |
| `<th>` | Header cell (bold, centered by default) |
| `<td>` | Data cell |

**Merging cells**

```html
<table border="1">
    <tr>
        <th colspan="2">Personal Details</th>
    </tr>
    <tr>
        <td>Name</td>
        <td>Ravi Kumar</td>
    </tr>
    <tr>
        <td rowspan="2">Contact</td>
        <td>Phone: 9876543210</td>
    </tr>
    <tr>
        <td>Email: ravi@example.com</td>
    </tr>
</table>
```

- `colspan="2"` — cell spans across 2 columns.
- `rowspan="2"` — cell spans across 2 rows.

---

## 11. Embedding Media

**Audio**

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

**Video**

```html
<video controls width="600" poster="thumbnail.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

| Attribute | Purpose |
|---|---|
| `controls` | Shows play/pause/volume UI |
| `autoplay` | Starts playing automatically (browsers often block this unless `muted` is also set) |
| `loop` | Repeats playback |
| `muted` | Starts muted |
| `poster` | Image shown before video plays |
| Multiple `<source>` tags | Provide multiple formats; the browser picks the first one it supports |

**Embedding external content with `<iframe>`**

```html
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    width="560" 
    height="315" 
    title="Sample Video"
    allowfullscreen>
</iframe>
```

- `<iframe>` embeds another HTML document (video, map, external widget) inside the current page.
- Common use cases: embedding YouTube videos, Google Maps, payment gateways.

---

## Summary of Unit II

- Every HTML document follows a fixed structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- Elements are built from opening/closing tags and can carry attributes; global attributes like `id`, `class`, and `data-*` are usable almost everywhere.
- Text elements (`<h1>`-`<h6>`, `<p>`, `<strong>`, `<em>`, etc.) structure and emphasize content, with semantic tags carrying meaning beyond visual styling.
- Links (`<a>`) and images (`<img>`) are the core of interlinked, multimedia web content; `alt` text and `rel="noopener noreferrer"` are important for accessibility and security.
- Lists (`<ul>`, `<ol>`, `<dl>`) organize related items, including nested structures.
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) replace generic `<div>` wrappers wherever meaning can be conveyed.
- Forms (`<form>`, `<input>`, `<select>`, `<textarea>`) capture user input, with input types and validation attributes controlling behavior and correctness.
- Tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) structure tabular data, with `colspan`/`rowspan` for merged cells.
- Media elements (`<audio>`, `<video>`, `<iframe>`) embed rich content directly into web pages.