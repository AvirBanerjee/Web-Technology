# HTML and CSS Project List


## Level 1: Beginner (Single Component)

**Project 1: Personal Bio Card**
- A single card with a profile image, name, role, short description, and a list of three hobbies.
- Concepts: text elements, images, lists, box model, borders, colors, typography.
- Must include: a hover effect on the card using `transition` and `transform`.

**Project 2: Login Page**
- A centered login form with username, password, a "remember me" checkbox, and a submit button.
- Concepts: forms, labels, input types, `:focus` and `:hover` states, `display: flex` for centering.
- Must include: placeholder styling with `::placeholder` and a visible focus outline.

**Project 3: Product Card**
- A shoe, phone, or book product card with image, title, price (using `<sup>` for the currency symbol), rating text, and a "Buy Now" button.
- Concepts: figure/figcaption, box model, pseudo-classes, transitions.
- Must include: a "Sale" badge positioned on the image corner using `position: absolute`.

**Project 4: Pricing Table**
- Three pricing plans (Basic, Standard, Premium) side by side, with the middle plan highlighted.
- Concepts: lists, Flexbox, borders, shadows, `:hover`, `:nth-child`.
- Must include: the plans stack vertically on mobile using a media query.

**Project 5: Recipe Page**
- A recipe with a title, hero image, ingredients (unordered list), steps (ordered list), and a nutrition table.
- Concepts: headings, lists, tables with `thead`/`tbody`, typography, `::first-letter`.
- Must include: striped table rows using `:nth-child(even)`.

---

## Level 2: Intermediate (Complete Section or Page)

**Project 6: Responsive Navigation Bar**
- A navbar with a logo on the left and links on the right, plus a dropdown submenu on hover.
- Concepts: Flexbox, `justify-content`, `align-items`, `position: relative/absolute`, `:hover`, `display: none`.
- Must include: on mobile, links stack vertically under the logo.

**Project 7: Landing Page for a Product or Event**
- Sections: hero (headline, subtext, call-to-action button), features (three icons/cards), testimonials, and footer.
- Concepts: semantic layout, Flexbox, Grid, typography, `rgba` overlays on a background image.
- Must include: hero image with a dark overlay and a three-column features grid that becomes one column on mobile.

**Project 8: Photo Gallery**
- At least 12 images in a grid with captions that appear on hover.
- Concepts: CSS Grid with `repeat()` and `fr`, `figure`/`figcaption`, `transition`, `transform: scale()`.
- Must include: 4 columns on desktop, 2 on tablet, 1 on mobile.

**Project 9: Restaurant Menu Page**
- Categories (Starters, Main Course, Desserts) with dish name, description, and price on each line.
- Concepts: nested lists or description lists, Grid, typography, `::after` for dotted leaders or decorations.
- Must include: two-column menu on desktop and single column on mobile.

**Project 10: Student Registration Form**
- A multi-section form with personal details, course selection (dropdown), preferred batch (radio), interests (checkboxes), and file upload.
- Concepts: all form input types, `required`, `pattern`, `minlength`, `fieldset`/`legend`, Grid for form layout, `:valid` and `:invalid` styling.
- Must include: at least eight different input types and visual feedback for valid and invalid fields.

**Project 11: Blog Article Page**
- Header with navigation, an article with headings, images, a blockquote and code-style text, a sidebar with related posts, and a footer.
- Concepts: semantic elements, Grid layout with named areas (`grid-template-areas`), typography, `::before` for the blockquote mark.
- Must include: sidebar moves below the article on tablet and mobile.

---

## Level 3: Advanced (Multi-Page or Full Layout)

**Project 12: Personal Portfolio Website (Three Pages)**
- Pages: Home, Projects, Contact, linked through a shared navigation.
- Home: introduction and profile image. Projects: grid of project cards. Contact: form with at least eight input types.
- Concepts: semantic HTML only, internal linking, Flexbox navbar, Grid layout (header, sidebar, main, footer), forms, media queries.
- Must include: at least three media query breakpoints (mobile, tablet, desktop) and a consistent theme using CSS variables.
- This project corresponds to Experiments 2 and 3 in the syllabus.

**Project 13: Business or Brand Website (Multi-Section)**
- Based on a made-up brand (for example a cafe, gym, or coaching institute): navbar, hero, about, services, team, pricing, contact, and footer, with same-page anchor links in the navbar.
- Concepts: anchor links to section IDs, `position: sticky` navbar, Grid and Flexbox together, `::before`/`::after` decorations, transitions.
- Must include: sticky navbar and a fully responsive layout.

**Project 14: Dashboard Layout (Static)**
- A admin-style layout with a fixed sidebar, a top bar, summary cards (four across), a data table, and a footer.
- Concepts: Grid areas, Flexbox, `position: fixed`, tables, box shadows, CSS variables for light and dark colors.
- Must include: sidebar collapses to a top bar on mobile.

**Project 15: Online Resume / CV**
- A two-column resume: left column with photo, contact, skills; right column with experience, education, projects.
- Concepts: semantic sections, Grid, lists, typography, `@media print` rules so it prints cleanly on one page.
- Must include: skill bars made using only HTML and CSS (nested `div` elements with percentage widths, or the `<progress>` element).

**Project 16: Pure CSS Components Library**
- A single page showing reusable components, each built with HTML and CSS only: buttons (three variants), alert boxes, badges, cards, a tooltip using `::after`, a toggle switch using a checkbox and `:checked`, and an accordion using `<details>`/`<summary>`.
- Concepts: pseudo-classes, pseudo-elements, transitions, BEM naming, CSS variables.
- Must include: BEM class names and a documented, well-commented stylesheet.

---

## Capstone Project (Choose One)

**Capstone A: Multi-Page Website for a Real or Fictional Organization**
- Minimum four pages (Home, About, Services/Products, Contact), shared header and footer design, responsive on all screen sizes, and a consistent design system defined through CSS variables.

**Capstone B: Clone of a Simple Public Page**
- Recreate the layout (not the content or branding) of a well-known landing page, such as a streaming site's home page or a travel booking page, using original placeholder text and images.