# Matching Game Implementation

[🔗 Preview](https://docs.google.com/presentation/d/1qYHBjNm1W0jiaMoG0BPtyceUYQOpb1Dpbd5T36nJ0jo/edit?usp=sharing)

Learning is easier when playing, so I created a memory game using React.js.

**🔍 Keywords:** React.js, Express, Mysql, Node.js, JavaScript, CSS3, HTML5, async/await, API, Git, responsive design.

### 🟡 Version 1

This version only contains the basic logic of a memory matching game using React. But what's cool is that it serves as a practice tool for Spanish/English. Each pair shares the same image, but one card has the text in Spanish and the other in English.

- **🌱 Next version:** Include a wild card that will reveal a match.
- **👾 Bugs:** None that I know of, but if you find one let me know!

### 📦 Dependencies

1. Run `npm install` in project directory. This will install server-related dependencies such as `express`.

2. `cd client` and run `npm install`. This will install client dependencies (React).

### 💾 Database Setup

To set up the MySQL database for the project, follow these steps:

1. Access the MySQL interface in your terminal by running the appropriate command.
2. Create a new database called "adjectives" by executing the following command: `create database adjectives`.
3. Create an `.env` file in the project folder and add the MySQL authentication information for the MySQL user. For example:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_NAME=adjectives
   DB_PASS=YOURPASSWORD

   ```

4. Run `npm run migrate` in a new terminal window in the project folder. This command will create a table called 'adjectives' in the database.
5. The database has already been populated with the information of adjectives.

| Tables_in_adjectives |
| -------------------- |
| adjectives           |

| Field     | Type         | Null | Key | Default | Extra          |
| --------- | ------------ | ---- | --- | ------- | -------------- |
| id        | int          | NO   | PRI | NULL    | auto_increment |
| spanish   | varchar(40)  | NO   |     | NULL    |                |
| english   | varchar(40)  | NO   |     | NULL    |                |
| image_url | varchar(255) | YES  |     | NULL    |                |

### 🔧 Development

1. Run `npm start` in project directory to start the Express server on port 4000
2. In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

### 🗂️ File structure:

    📗 MATCHING GAME
    ├── 📂 bin
    ├── 📂 client
    │   ├── 📂 node_modules
    │   ├── 📂 public
    │   ├── 📂 src
    │   │   ├── 📂 assets
    │   │   ├── 📂 components
    |   │   │   ├── 💛 animals.js
    |   │   │   ├── 🎨 Card.css
    |   │   │   ├── 💙 Card.jsx
    |   │   │   ├── 💙 CardBack.jsx
    |   │   │   ├── 💙 CardFront.jsx
    |   │   │   ├── 🎨 GameBoard.css
    |   │   │   ├── 💙 GameBoard.jsx
    |   │   │   ├── 🎨 GameFinished.css
    |   │   │   └── 💙 GameFinished.jsx
    │   │   ├── 🎨 App.css
    │   │   ├── 💙 App.jsx
    │   │   ├── 🎨 index.css
    │   │   ├── 💙 main.jsx
    │   │   └── 💛 matchingGame.js
    │   ├── 📄 index.html
    ├── 📂 model
    ├── 📂 node_modules
    ├── 📂 public
    ├── 📂 routes
    ├── ⚙️ .env
    ├── 💛️ app.js
    ├── 🔑 LICENSE
    └── 📖 README.md
