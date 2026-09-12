# Unit II: HTML Fundamentals — Practice Sheet

---

## Section A: Structure and Text

**Q1. Recipe Card**
Create a page for a single recipe. It must have:
- One main heading for the recipe name
- A sub-heading "Ingredients" followed by an unordered list of at least 5 ingredients
- A sub-heading "Steps" followed by an ordered list of at least 5 steps
- One sentence at the end using `<strong>` for a warning (e.g., "Do not overcook the rice") and `<em>` for a tip

**Q2. Movie Review**
Write a short movie review page. Use:
- A heading with the movie name
- A paragraph review that includes `<mark>` around the single word that best sums up your opinion
- A rating written using `<sub>` and `<sup>` to show a fraction, e.g., 7⁄10
- A `<del>` showing an old rating and `<ins>` showing an updated rating

**Q3. Fake News Correction**
A news site published an incorrect number, then corrected it. Show the wrong number struck through and the correct number inserted next to it, inside a full paragraph of context.

---

## Section B: Links

**Q4. Table of Contents**
Create a single page with 4 sections (`<section>` with an `id` each). At the top, create a "Table of Contents" as an unordered list where every item is a same-page anchor link jumping to one of the sections.

**Q5. Contact Card**
Build a small digital business card containing:
- A name and job title
- A clickable email link that opens the user's email client
- A clickable phone number link that opens the dialer
- A link to a portfolio website that opens in a new tab, using the correct security attribute

**Q6. Broken Link Fallback Thinking**
Explain in a one-line HTML comment placed above your code: if the `href` of a link is wrong, what does the user experience? Then write a correct working link to `https://developer.mozilla.org` as proof you understand the fix. (This question tests understanding, not just syntax.)

---

## Section C: Images and Media

**Q7. Product Card**
Create a single product card containing an image, a `<figcaption>` describing the product, a price line using `<sup>` for the currency symbol, and meaningful `alt` text (not just "image" or "product").

**Q8. Before/After Gallery**
Create two images side by side (a "before" and "after" pair) each wrapped in its own `<figure>` with a `<figcaption>`. Add appropriate `alt` text distinguishing the two.

**Q9. Podcast Page**
Create a page for a podcast episode with:
- A heading with the episode title
- An `<audio>` element with controls, and two `<source>` tags for different formats
- A short paragraph description below the player

**Q10. Video Preview**
Embed a video using the `<video>` tag with a `poster` image, `controls` enabled, and a fallback text for browsers that do not support the tag.

---

## Section D: Lists

**Q11. Nested Menu**
Create a restaurant menu using nested unordered lists: top-level items are categories (Starters, Main Course, Desserts), and each category contains a nested list of 3 dish names.

**Q12. Ranking Board**
Create an ordered list showing the top 5 finishers of a coding competition, using the `type` attribute to display roman numerals (I, II, III...) instead of default numbers.

**Q13. Glossary Page**
Pick any 4 web development terms (e.g., DOM, API, DNS, HTTP) and create a `<dl>` description list defining each one in a single line.

---

## Section E: Semantic HTML

**Q14. Blog Post Layout**
Build a single blog post page using proper semantic structure:
- `<header>` with site name and `<nav>` with 3 links
- `<main>` containing one `<article>` with a `<section>` inside for "Comments"
- `<aside>` with a "Related Posts" list
- `<footer>` with a copyright line

**Q15. Spot the Mistake**
Below is a description of a page (not code): "A developer wrapped the entire page's navigation menu in a `<div>`, and used a `<span>` to wrap a large block of blog content." Rewrite this using the correct semantic tags, and add one sentence explaining why the change matters for accessibility.

---

## Section F: Forms and Inputs

**Q16. Event Registration Form**
Build a form to register for a tech event. It must include at least 6 different input types (from: text, email, tel, date, number, radio, checkbox, file, range, color) with proper `<label>` elements linked using `for`/`id`, and at least 2 fields marked `required`.

**Q17. Feedback Survey**
Create a short survey form with:
- A `<select>` dropdown asking "How did you hear about us?" with at least 4 options
- A group of radio buttons asking to rate an event from 1 to 5
- A `<textarea>` for additional comments
- A submit button

**Q18. Login Form with Validation Logic**
Create a login form with a username field (`minlength="4"`) and a password field (`minlength="8"`). Add `placeholder` text to both fields guiding the user on what to type. Explain in a comment what happens if the user submits fewer characters than the minimum.

**Q19. Multi-Step Thinking: GET vs POST**
Create two versions of the same simple search form — one using `method="GET"` and one using `method="POST"`. Below the code, write one line explaining what visible difference you would notice in the browser's address bar between the two after submitting.

---

## Section G: Tables

**Q20. Class Timetable**
Create a weekly timetable as a table: columns for each day (Mon–Fri), rows for time slots (9-10, 10-11, 11-12). Use `<thead>` for the day names and `<tbody>` for the time slots and subjects.

**Q21. Merged Invoice Table**
Create a simple invoice table with a header row, at least 3 item rows (Item, Quantity, Price), and a final total row where the "Total" label uses `colspan` to merge across the first two columns.

**Q22. Student Report Card**
Create a table listing 4 students with columns Name, Subject 1, Subject 2, Subject 3, and Total. Use `rowspan` at least once (for example, to group two students under a shared "Section A" label in a merged first column).

---

## Section H: Mixed Logic Challenges (Combine Multiple Concepts)

**Q23. Mini Portfolio Homepage**
Build a one-page portfolio combining: semantic layout (`header`, `main`, `footer`), a profile image with proper `alt` text, a nested list of skills grouped by category, a table of past projects (Name, Tech Used, Link), and a contact form with at least 4 input types.

**Q24. FAQ Accordion Structure (HTML only, no JS/CSS yet)**
Build the HTML skeleton for an FAQ page: 5 questions, each as a heading, followed immediately by its answer paragraph. Use same-page anchor links at the top so a user can jump directly to any question. (This sets up the structure that JavaScript will later make collapsible, in Unit IV.)

**Q25. Debug the Broken Page**
Below is a deliberately broken snippet description (write and fix it yourself): "A form has three text inputs but none of them have an `id`, and the labels do not have a `for` attribute. There is also an image with no `alt` attribute, and a table with `<td>` used in place of `<th>` for the header row." Rewrite a corrected, working version of this page with all four issues fixed.

---

## How to Use This Sheet

- Attempt each question by writing full, valid HTML documents (with `<!DOCTYPE html>`, `<head>`, `<body>`), not just the snippet.
- Open every file in a browser to check that it renders as expected before considering it complete.
- Section H questions are intentionally harder — they combine multiple Unit II topics the way a real webpage would.
