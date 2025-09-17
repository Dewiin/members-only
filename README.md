<a name="readme-top"></a>

<div align="center">
  <img src="./public/assets/inkcognito_logo.png" alt='logo' width=150>
  <h1>Inkcognito</h1>
</div> <br>

<details open>
<summary>Table of Contents</summary>
<ol>
  <li>
    <a href="#introduction">Introduction</a>
  </li>
  <li>
    <a href="#features">Features</a>
    <ul>
      <li>
        <a href="#built-with">Built With</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#folder-structure">Folder Structure</a>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#cloning-the-repository">Cloning the Repository</a></li>
      <li><a href="#creating-database">Creating Database</a></li>
      <li><a href="#seeding">Seeding</a></li>
      <li><a href="#usage">Usage</a></li>
    </ul>
  </li>
  <li><a href="#demo">Demo</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ol>
</details>

## Introduction

An exclusive anonymous clubhouse where members can share secret posts visible only to other members. Members can register, write anonymous posts, and see who wrote what only inside the club. Outside, posts appear anonymous.

## Features

- User authentication
- Anonymous posting system
- Fully responsive design
- Members-only access control

### Built With

[![HTML][HTML]][HTML-url]
[![CSS][CSS]][CSS-url]
[![Javascript][Javascript]][Javascript-url]
[![Node][Node]][Node-url]
[![Express][Express]][Express-url]
[![EJS][EJS]][EJS-url]
[![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<p align="right"><a href="#readme-top">Back to top</a></p>

## Folder Structure

```bash
├── LICENSE
├── README.md
├── config
│   ├── passportConfig.js
│   └── sessionConfig.js
├── controllers
│   ├── formsController.js
│   └── indexController.js
├── db
│   ├── messageQueries.js
│   ├── pool.js
│   ├── script.js
│   └── userQueries.js
├── index.js
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   └── inkcognito_logo.png
│   ├── favicon
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── site.webmanifest
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   ├── scripts
│   │   ├── addMembership.js
│   │   └── userNavbar.js
│   └── styles
│       ├── form.css
│       ├── index.css
│       ├── messages.css
│       ├── navbar.css
│       └── profile.css
├── routes
│   ├── formsRouter.js
│   └── indexRouter.js
└── views
    ├── 401.ejs
    ├── 404.ejs
    ├── index.ejs
    ├── login.ejs
    ├── newPost.ejs
    ├── partials
    │   ├── defaultNavbar.ejs
    │   ├── errors.ejs
    │   ├── favicon.ejs
    │   ├── footer.ejs
    │   ├── message.ejs
    │   ├── unauthorized.ejs
    │   └── userNavbar.ejs
    ├── profile.ejs
    └── register.ejs
```

## Getting Started

To get a local copy of this repository up and running locally follow these steps:

### Prerequisites

1. Ensure you have Node.js and npm installed:  
   **NOTE:** You can check installation and version with
   ```sh
    node -v
    npm -v
   ```

2. Ensure you have PostreSQL installed:  
   **NOTE:** If you don't have PostgreSQL installed, [follow instructions](www.postgresql.org/download/) for your OS.  
   Verify that it's installed:
   ```sh
    psql -V
   ```

### Cloning the Repository

1. Navigate to the directory where you want to clone/run/save the application:
   ```sh
   cd example_directory
   ```
2. Clone the repository:
   ```sh
   git clone https://github.com/Dewiin/members-only.git
   ```
3. Navigate to the project directory:
   ```sh
   cd members-only
   ```
4. Download the dependencies in package.json:
   ```sh
   npm install
   ```

### Creating Database

1. Enter the PostgreSQL shell:
   ```sh
   psql
   ```
2. Then, in your PostgreSQL shell:
   ```sh
   CREATE DATABASE members_only;
   ```
3. Connect to the database:
   ```sh
   \c members_only
   ```

### Seeding

1. Create a `.env` file in the root directory:
   ```sh
   touch .env
   ```
2. Add your Connection URI:
   ```sh
   DATABASE_URL=postgresql://your_username:your_password@localhost:5432/members_only
   ```
3. Run the script to create database schema:
   ```sh
   npm run script
   ```

### Usage

1. Run the application:
   ```sh
   npm run dev
   ```
2. Navigation:  
   **Home Page** displays all messages.  
   **Profile** displays the user's info, and all their posts.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Preview

<div align="center">
  <img src="./public/assets/inkcognito_ss.png" alt="demo video">
</div>

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contributing

We like open-source and want to develop practical applications for real-world problems. However, individual strength is limited. So, any kinds of contribution is welcome, such as:

- New features
- Bug fixes
- Typo fixes
- Suggestions
- Maintenance
- Documents
- etc.

#### Heres how you can contribute:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

<p align="right"><a href="#readme-top">Back to top</a></p>

## License

MIT License

Copyright (c) 2025 Devin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[HTML]: https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://html.spec.whatwg.org/multipage/
[CSS]: https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff&color=blue
[CSS-url]: https://www.w3.org/Style/CSS/Overview.en.html
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000
[Javascript-url]: https://262.ecma-international.org/14.0/
[Node]: https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express]: https://img.shields.io/badge/Express.js-%2323404d59.svg?style=for-the-badge&logo=express&logoColor=%232361DAFB
[Express-url]: https://expressjs.com/
[EJS]: https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=fff
[EJS-url]: https://ejs.co/
[PostgreSQL]: https://img.shields.io/badge/Postgres-%2323316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
