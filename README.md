<h1 align="center"> Blog Website 📝 - Web Application </h1> <br>
<p align="center">
  <img src="https://raw.githubusercontent.com/hardikarora20/Blog-Website/main/screenshots/home.png" alt="Home Page Screenshot">
</p>

<a href="#introduction"></a>
## Introduction 🚀

Welcome to **Blog Website**, a dynamic web application built using Node.js and Express.js, designed for a seamless blogging experience. With Blog Website, you can effortlessly compose, view, and manage blog posts, all powered by a robust MongoDB database for efficient data management.

<a href="#technologies-used"></a>
## Technologies Used 💻

Blog Website leverages the following technologies:

- **Programming Languages and Frameworks:** Developed using Node.js and Express.js.
- **Templating Engine:** EJS (Embedded JavaScript) for dynamic page rendering.
- **Database Management:** MongoDB, utilizing MongoDB Compass for cloud database management.
- **Middleware:** Body-parser for handling form data.

<a href="#database-structure"></a>
## Database Structure 📊

Blog Website uses MongoDB to store the following collections:

1. **Posts Collection:** Stores blog post information, including title and description.

<a href="#templates-structure"></a>
## Templates Structure 📑

The application utilizes EJS templates located in the `views` folder, structured as follows:

- **Partials Folder:** Contains reusable header and footer EJS files.
- **Main Pages:**
  - `home.ejs` - Displays the homepage with a list of blog posts.
  - `about.ejs` - Provides information about the blog.
  - `compose.ejs` - Allows users to compose new blog posts.
  - `contact.ejs` - Contains contact information.
  - `post.ejs` - Displays individual blog posts.

<a href="#main-file"></a>
## Main File 🗄️

The main file of the application is `app.js`, which contains the core code for routing and server setup.

<a href="#installation"></a>
## Installation 🛠️

To get started with Blog Website, follow these steps:

1. **Install Node.js and npm:** Ensure you have Node.js and npm installed. You can download the latest version from the [official Node.js website](https://nodejs.org/).

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up MongoDB:**
   - Create a MongoDB database using MongoDB Compass or any other preferred method.
   - Update the connection string in your `app.js` file if necessary.

5. **Run the Application:**
   ```bash
   node app.js
   ```

6. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000`.

<a href="#usage"></a>
## Usage 📖

To start using the Blog Website application:

1. **Navigate to the Compose Page:**
   - Go to `http://localhost:3000/compose` to add new blog posts.
   <p align="center">
     <img src="https://raw.githubusercontent.com/hardikarora20/Blog-Website/main/screenshots/compose.png" alt="Compose Page Screenshot">
   </p>

2. **View Blog Posts:**
   - The home page lists all blog posts. Click on a post title to view its content.
   <p align="center">
     <img src="https://raw.githubusercontent.com/hardikarora20/Blog-Website/main/screenshots/post.png" alt="Post Page Screenshot">
   </p>

3. **Explore Other Pages:**
   - Visit the about and contact pages for additional information.
   <p align="center">
     <img src="https://raw.githubusercontent.com/hardikarora20/Blog-Website/main/screenshots/contact.png" alt="Contact Page Screenshot">
   </p>

<a href="#contributing"></a>
## Contributing 🤝

We welcome contributions to improve and expand Blog Website. Whether you're a developer, designer, tester, or just an enthusiastic user, there are several ways you can contribute:

- **Reporting Issues:** If you encounter a bug or have a suggestion, open an issue. Provide detailed information about the issue, including steps to reproduce it.
- **Documentation:** Help improve our documentation by fixing typos, adding information, or clarifying content. Documentation changes can be submitted through pull requests.
- **Testing:** Test the application and report any issues you discover. Your feedback is valuable for improving stability and functionality.
- **Spread the Word:** Share Blog Website with others who may benefit from it. The more users and contributors we have, the better the application becomes.

Thank you for considering contributing to Blog Website!

<p align="center">
  <br>
  Blogging Made Easy.
  <br><br>
</p>
