<a name="readme-top">
  <div align="center"> 
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo-light.svg">
    <img alt="Bookshelf Logo" src="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo_light.svg" width="400">
  </picture>
  </div>
</a>
    
<h2 align="center">
    Building a Bookshelf Experience with HTML, CSS, JavaScript, Axios, Firebase, and More!
</h2>
    
<div align="center">
  <p>
    Discover, search, and display books effortlessly on Bookshelf's intuitive platform.
    <br />
    <a href="https://github.com/Valik3201/bookshelf"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://valik3201.github.io/bookshelf/">View Demo</a>
    ·
    <a href="https://github.com/Valik3201/bookshelf/issues">Report Bug</a>
    ·
    <a href="https://github.com/Valik3201/bookshelf/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#api-reference">API Reference</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- Screenshot -->

[![screenshot](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/1.png)](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/1.png)

**Bookshelf** is a web application for browsing books, with additional features such as the ability
to add books to a shopping list, explore categories, view popular books, and support charitable
foundations.

[![screenshot](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/5.png)](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/5.png)

> [!NOTE]\
> The project is set up for automatic deployment to GitHub Pages using GitHub Actions by JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)).
> The deployment action is configured to push production-ready code into the `gh-pages` branch.

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- Built With -->

## Built With

The "Bookshelf" project employs a diverse set of technologies and tools to create a seamless and
engaging user experience.

### Frontend

- **HTML:** Markup language for structuring content.
- **CSS:** Styling language for presenting the project's visual aspects.
- **JavaScript:** Programming language for dynamic and interactive elements.
- **Swiper:** Utilized for creating a slider component for charity foundations.

### Backend / Firebase

- **Firebase:** Integrated for user authentication, providing a secure login system.

### Server/API Communication

- **Axios:** HTTP client used to manage asynchronous operations and handle HTTP requests
  effectively.

### Notifications

- **Notiflix:** Notification library implemented to enhance user feedback.

### Additional Tools

- **Node.js and npm:** Used for managing project dependencies.
- **Responsiveness:** Designed to ensure optimal performance across various devices.

This diverse technological stack enables the "Bookshelf" project to deliver a feature-rich platform
for book enthusiasts, offering functionalities such as browsing books, supporting charity
foundations, managing shopping lists, and more.

[![screenshot](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/6.png)](https://github.com/Valik3201/bookshelf/blob/update/minor-corrections/src/images/screenshots/6.png)

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- API -->

## API Reference

#### Get all categories

```
  GET /books/category-list
```

Returns a list of categories.

#### Get top books in each category

```
  GET /books/top-books
```

Receives the first 5 books from the collection in each category.

#### Get books by category

```
  GET /books/category
```

| Parameter  | Type     | Description                                           |
| :--------- | :------- | :---------------------------------------------------- |
| `category` | `string` | Category name to get a list of books in this category |

Receives a collection of 20 books of a certain category.

#### Get information about a book

```
  GET /books/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of book to fetch |

Receives complete information about the book identified by `{id}`.

<!-- GETTING STARTED -->

## Getting Started

This section provides information on prerequisites and installation steps to set up the Bookshelf
project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Valik3201/bookshelf.git
   ```
2. Navigate to the project directory
   ```sh
    cd bookshelf
   ```
3. Install dependencies
   ```sh
    npm ci
   ```
4. Run the project in development mode:
   ```sh
   npm run dev
   ```

Now you're ready to explore and contribute to Bookshelf locally!

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- USAGE -->

## Usage

Users can navigate through the platform using the following features:

### Authentication

- Ability to create an account and log in using Firebase.

### Browse Books

- The homepage displays a list of book categories and best sellers within each category .
- Enables users to browse books based on categories.

### Shopping List

- Users can add books to the shopping list.
- The shopping list is accessible for logged-in users.

### Detailed Information

- Clicking on a book provides users with detailed information in a modal window.

### Charity Foundations

- Users can click on each foundation, opening a new page with the respective foundation's website
  for more information.

### Themes and Responsiveness

- Two themes available: light and dark.
- Responsiveness optimized for various devices.

### Pagination, Loader, Scroll Up

- Pagination on the Shopping list page.
- Loader indicates ongoing asynchronous operations.
- Scroll Up button for quick navigation to the top of the page.

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the project,
create a new branch, make your changes, and submit a pull request.

1. Fork the Project
2. Create your Feature Branch

   ```sh
   git checkout -b feature/NewFeature

   ```

3. Commit your Changes
   ```sh
   git commit -m 'Add some NewFeature'
   ```
4. Push to the Branch
   ```sh
   git push origin feature/NewFeature
   ```
5. Open a Pull Request

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- CONTRIBUTORS -->

## Contributors

1. **[Valentyn Chernetskyi](https://github.com/Valik3201)** - Team Lead
   - Home Page
   - Loader
   - Authorization

2. **[Mateusz Firla](https://github.com/superfilar)** - Scrum Master
   - Header
   - Dark Mode

3. **[Tomek Stańczak](https://github.com/tomekstanczak)**
   - Header
   - Mobile Menu
   - Authorization

4. **[Anna Sanetra](https://github.com/Anna0067)**
   - Shopping List Page
   - Books in localStorage
   - Pagination

5. **[Aleksandra Jarzębska](https://github.com/AleksandraJarz)**
   - Images & Icons
   - Modal Window
   - Book by ID

6. **[Ewa Górniak](https://github.com/gorniakewa300)**
   - Modal Window
   - Book by ID

7. **[Patryk Kuca](https://github.com/patryq03)**
   - Charity Foundations
   - Scroll Up Button

<p align="right"><a href="#readme-top">Back to top</a></p>
