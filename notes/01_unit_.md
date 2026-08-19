# Unit I: How the Web Works

## 1. Web vs Internet

These two terms are often used interchangeably, but they are not the same thing.

**Internet**
- The internet is a global network of interconnected computers and other devices.
- It is the physical and logical infrastructure: cables, routers, satellites, wifi towers, and the protocols (like TCP/IP) that let devices talk to each other.
- The internet existed before the web and carries many services besides the web: email (SMTP), file transfer (FTP), video calls, online gaming, messaging apps, etc.

**Web (World Wide Web)**
- The web is one service that runs on top of the internet.
- It is a system of interlinked documents (web pages) accessed through browsers using HTTP/HTTPS.
- Invented by Tim Berners-Lee in 1989 at CERN.

**Analogy**
- Internet is like the road and electricity network of a city.
- Web is like one particular service running on that network, such as a courier company using those roads.
- Other services (email, Netflix streaming, WhatsApp) use the same internet infrastructure but are not "the web."

| Aspect | Internet | Web |
|---|---|---|
| What it is | Network of networks (hardware + protocols) | A service/application running on the internet |
| Core protocol | TCP/IP | HTTP/HTTPS |
| Existed since | 1960s (ARPANET) | 1989 |
| Examples of use | Email, FTP, VoIP, Web, gaming | Browsing websites, web apps |

---

## 2. Client-Server Model

The client-server model is the basic architecture on which the web operates.

**Client**
- Any device or program that requests a resource or service.
- Example: a web browser (Chrome, Firefox) running on a laptop or phone.

**Server**
- A computer (or program on a computer) that stores resources (web pages, images, data) and responds to requests from clients.
- Example: a machine running software like Nginx or Apache, hosting a website's files.

**How it works (step by step)**

1. User types a URL (e.g., `https://example.com`) in the browser and presses enter.
2. The browser (client) sends an HTTP request to the server that hosts `example.com`.
3. The server processes the request (may fetch data from a database, run backend code).
4. The server sends back an HTTP response, usually containing HTML, CSS, JS, images, etc.
5. The browser receives this response and renders the web page on screen.

```
[Client / Browser]  --- HTTP Request --->  [Server]
[Client / Browser]  <--- HTTP Response ---  [Server]
```

**Key points**
- A single server can handle requests from many clients simultaneously.
- Communication is typically request-response: the client always initiates the request; the server responds. (This is the traditional model; technologies like WebSockets allow servers to push data too, but that is beyond this unit.)
- Clients and servers can be on the same machine (during development, e.g., `localhost`) or on different machines across the world.

---

## 3. URL Structure

URL stands for Uniform Resource Locator. It is the address used to locate a resource on the web.

**General structure**

```
scheme://user:password@host:port/path?query#fragment
```

**Example**

```
https://www.example.com:443/products/shoes?color=red&size=9#reviews
```

Breaking this down:

| Part | Value in example | Meaning |
|---|---|---|
| Scheme/Protocol | `https` | Protocol used to access the resource (http, https, ftp, mailto, etc.) |
| Host/Domain | `www.example.com` | The server's address (domain name) |
| Port | `443` | The port number on the server (443 is default for HTTPS, 80 for HTTP; often omitted since browsers assume defaults) |
| Path | `/products/shoes` | Specific location of the resource on the server, similar to a file path |
| Query string | `?color=red&size=9` | Extra parameters sent to the server, key=value pairs separated by `&` |
| Fragment | `#reviews` | Refers to a specific section within the page (handled by the browser, not sent to the server) |

**More examples**

- `https://www.google.com/search?q=web+development` — query parameter `q` holds the search term.
- `http://localhost:3000/api/users/5` — path parameter identifying user with id 5.
- `mailto:contact@example.com` — scheme used for opening an email client, not HTTP-based.

**Important notes**
- HTTP default port: 80. HTTPS default port: 443. These are usually hidden in the address bar because browsers use them automatically.
- A domain name (e.g., `example.com`) is a human-readable stand-in for an IP address (e.g., `93.184.216.34`), resolved through DNS (explained below).

---

## 4. HTTP Methods and Status Codes

HTTP (HyperText Transfer Protocol) is the protocol that defines how clients and servers communicate. It is a request-response protocol.

### 4.1 HTTP Methods

HTTP methods (also called verbs) indicate the action the client wants to perform on a resource.

| Method | Purpose | Example use case |
|---|---|---|
| GET | Retrieve data from the server. Should not change server state. | Loading a web page, fetching a list of products |
| POST | Send data to the server to create a new resource. | Submitting a signup form, creating a new blog post |
| PUT | Update/replace an existing resource completely. | Updating a full user profile |
| PATCH | Partially update an existing resource. | Changing only the email field of a user |
| DELETE | Remove a resource. | Deleting a user account |
| HEAD | Same as GET but returns only headers, no body. | Checking if a resource exists without downloading it |
| OPTIONS | Ask the server what methods/operations are supported for a resource. | Used in CORS preflight requests |

**Example of a GET request (conceptually what the browser sends)**

```
GET /products/shoes?color=red HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

**Example of a POST request**

```
POST /api/login HTTP/1.1
Host: www.example.com
Content-Type: application/json

{
  "username": "avir",
  "password": "12345"
}
```

Notice that GET requests usually carry data through the URL (query string), while POST requests usually carry data in the request body.

### 4.2 HTTP Status Codes

The server includes a status code in every response to indicate the result of the request. Status codes are grouped into five classes based on the first digit.

| Range | Class | Meaning |
|---|---|---|
| 1xx | Informational | Request received, still processing |
| 2xx | Success | Request was successfully received, understood, and processed |
| 3xx | Redirection | Further action needed to complete the request |
| 4xx | Client Error | Something is wrong with the request sent by the client |
| 5xx | Server Error | Server failed to fulfil a valid request |

**Commonly used status codes**

| Code | Name | Meaning |
|---|---|---|
| 200 | OK | Request succeeded |
| 201 | Created | New resource successfully created (common after POST) |
| 301 | Moved Permanently | Resource has a new permanent URL |
| 302 | Found | Resource temporarily at a different URL |
| 304 | Not Modified | Cached version is still valid, no need to re-download |
| 400 | Bad Request | Server could not understand the request due to invalid syntax |
| 401 | Unauthorized | Authentication required or failed |
| 403 | Forbidden | Client authenticated but does not have permission |
| 404 | Not Found | Resource does not exist on the server |
| 405 | Method Not Allowed | HTTP method used is not supported for this resource |
| 500 | Internal Server Error | Generic server-side failure |
| 502 | Bad Gateway | Server acting as a gateway received an invalid response from upstream server |
| 503 | Service Unavailable | Server is temporarily overloaded or down for maintenance |

**Example scenario**
- You visit `https://example.com/old-page`, which has been moved. The server responds with `301 Moved Permanently` and a `Location` header pointing to the new URL. The browser automatically follows this redirect.
- You try to access an admin page without logging in. The server responds `401 Unauthorized`.
- You request a page that does not exist: `404 Not Found`.

---

## 5. DNS (Domain Name System)

Computers communicate using IP addresses (e.g., `142.250.183.14`), not domain names. DNS is the system that translates human-friendly domain names into IP addresses.

**Why DNS is needed**
- Humans remember names easily (`google.com`) but not numeric IP addresses.
- DNS acts like a phone book/directory for the internet.

**How DNS resolution works (step by step) when you type `www.example.com`**

1. **Browser cache check**: Browser checks if it already knows the IP address from a recent visit.
2. **OS cache check**: If not in browser cache, the operating system checks its own DNS cache.
3. **Recursive resolver (ISP or public, e.g., Google DNS 8.8.8.8)**: If not cached anywhere locally, the request goes to a DNS resolver, typically provided by your Internet Service Provider or a public resolver.
4. **Root DNS server**: The resolver asks a root server, which does not know the exact IP but points to the correct Top-Level Domain (TLD) server (e.g., for `.com`).
5. **TLD DNS server**: The `.com` TLD server points to the authoritative name server for `example.com`.
6. **Authoritative DNS server**: This server holds the actual DNS records for `example.com` and returns the IP address.
7. The resolver sends the IP address back to the browser.
8. The browser now sends an HTTP request directly to that IP address.

```
Browser -> OS cache -> ISP Resolver -> Root Server -> TLD Server -> Authoritative Server
                                                                          |
Browser <----------------------------- IP Address returned --------------
```

**Common DNS record types**

| Record | Purpose |
|---|---|
| A | Maps a domain to an IPv4 address |
| AAAA | Maps a domain to an IPv6 address |
| CNAME | Maps a domain/subdomain to another domain name (alias) |
| MX | Specifies mail servers responsible for receiving email for the domain |
| NS | Specifies the authoritative name servers for the domain |
| TXT | Stores arbitrary text, often used for domain verification or SPF/DKIM records |

**Example**
- `example.com` has an A record pointing to `93.184.216.34`.
- `www.example.com` might be a CNAME pointing to `example.com`.

**Caching**: DNS results are cached at multiple levels (browser, OS, resolver) with a Time To Live (TTL) value to reduce repeated lookups and speed up browsing.

---

## 6. Browser Rendering Pipeline

Once the browser receives the HTML, CSS, and JavaScript from the server, it must convert this raw text into pixels on the screen. This process is called the rendering pipeline (or critical rendering path).

**Steps in the rendering pipeline**

1. **Parsing HTML -> DOM (Document Object Model)**
   - The browser reads the HTML file and constructs a tree-like structure representing the page's elements and their nesting.
   - Example: `<body><h1>Hello</h1><p>World</p></body>` becomes a tree with `body` as parent, and `h1` and `p` as children.

2. **Parsing CSS -> CSSOM (CSS Object Model)**
   - The browser reads CSS (external files, `<style>` tags, inline styles) and builds a tree representing style rules and their computed values for each element.

3. **Render Tree construction**
   - The browser combines the DOM and CSSOM into a Render Tree.
   - Only visible elements are included (elements with `display: none` are excluded, but elements with `visibility: hidden` are included, just invisible).

4. **Layout (Reflow)**
   - The browser calculates the exact position and size of every element on the page based on the render tree, viewport size, and box model.

5. **Paint**
   - The browser fills in pixels: colors, text, images, borders, shadows, based on the layout calculated.

6. **Compositing**
   - If the page has multiple layers (e.g., due to `position: fixed`, animations, or `will-change`), the browser combines these layers in the correct order to produce the final image shown on screen.

**Diagram**

```
HTML  --parse-->  DOM
CSS   --parse-->  CSSOM
                        \
                         --> Render Tree --> Layout --> Paint --> Composite --> Screen
```

**Why this matters for developers**
- JavaScript that modifies the DOM or CSS can trigger reflow and repaint, which is expensive in terms of performance if done excessively or inefficiently.
- Understanding this pipeline explains why placing `<script>` tags at the end of `<body>` (or using `defer`) is recommended: it avoids blocking HTML parsing and DOM construction.
- Understanding why CSS should generally be loaded in the `<head>`: browsers wait for CSSOM before rendering, to avoid showing unstyled content (this is why blocking CSS in the head is standard practice despite the delay it introduces).

---

## 7. Browser DevTools Basics

DevTools (Developer Tools) are built into every modern browser (Chrome, Firefox, Edge) and are essential for inspecting, debugging, and testing web pages. Opened using `F12`, `Ctrl+Shift+I` (Windows/Linux), or `Cmd+Option+I` (Mac), or by right-clicking a page element and selecting "Inspect."

**Main panels**

1. **Elements panel**
   - Shows the live DOM tree of the page.
   - Allows editing HTML and CSS directly in the browser to test changes (changes are temporary, not saved to the actual file).
   - Shows computed CSS styles, box model dimensions (margin, border, padding, content) for a selected element.

2. **Console panel**
   - Used to run JavaScript directly against the current page.
   - Displays errors, warnings, and `console.log()` output from scripts.
   - Example: typing `document.title` in the console returns the page's title.

3. **Network panel**
   - Shows every HTTP request the page makes (HTML, CSS, JS, images, API calls, fonts).
   - For each request, you can see: method (GET/POST/etc.), status code, response headers, request headers, response body, size, and timing.
   - Useful for debugging failed API calls, slow-loading resources, or checking what data an API returns.

4. **Sources panel**
   - Shows all the source files (HTML, CSS, JS) loaded by the page.
   - Allows setting breakpoints in JavaScript code to pause execution and step through code line by line for debugging.

5. **Application panel**
   - Shows storage used by the site: `localStorage`, `sessionStorage`, cookies, IndexedDB, and cache storage.
   - Useful for inspecting or clearing stored data during development.

6. **Performance panel**
   - Records and analyzes runtime performance: how long scripts take to run, layout/paint timings, frame rates.

**Practical example: inspecting a request in the Network tab**

1. Open DevTools, go to the Network tab.
2. Reload the page (`Ctrl+R`).
3. Click on the first request (usually the HTML document itself).
4. Observe:
   - Method: `GET`
   - Status: `200 OK`
   - Content-Type: `text/html`
   - Response size and time taken
5. Click on "Headers" to see all request and response headers sent between browser and server.

This exercise directly connects to Experiment 1 in the syllabus, where students inspect real websites like Amazon, Wikipedia, and YouTube to identify HTTP method, status code, content type, response size, and redirects.

---

## Summary of Unit I

- The internet is the underlying network infrastructure; the web is one application (HTTP-based) that runs on it.
- The web works on a client-server model: browsers (clients) request resources, servers respond.
- URLs have a defined structure: scheme, host, port, path, query, and fragment.
- HTTP defines methods (GET, POST, PUT, PATCH, DELETE, etc.) for actions, and status codes (2xx, 3xx, 4xx, 5xx) for outcomes.
- DNS translates human-readable domain names into IP addresses through a hierarchical lookup process.
- The browser rendering pipeline converts HTML and CSS into pixels through DOM/CSSOM construction, render tree building, layout, paint, and compositing.
- DevTools (Elements, Console, Network, Sources, Application, Performance panels) are essential tools for inspecting and debugging web pages during development.