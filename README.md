# 📚 Bibliotech

Bibliotech is a simple yet functional **Book Management System**, created with **FastAPI (backend)** and **HTML/CSS/JS (frontend)**. It allows users to add, edit, delete, sort, and filter books in a local or remote database.

> 🌐 **Now with online API!**  
> Test the backend live: [Swagger UI Documentation](https://bibliotech-api-tnjq.onrender.com/docs)

---

## 🚀 Features

- Add, edit, and delete books.
- Sort books by title or year of publication.
- Filter/search by title, author, genre, publisher, or publication year.
- Responsive and intuitive frontend.
- Integration with online REST API (FastAPI + PostgreSQL)

---

## 🎥 Preview

### 🔍 Sorting & Filtering
![Sorting and Filtering](./assets/Bibliotech1.gif)

### ✏️ Adding, Editing, and Deleting
![CRUD Actions](./assets/Bibliotech2.gif)

---

## 🧩 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL (online) or SQLite (local, for development)

---

### Online (with deployed API)
1. Open `index.html` in your browser.
2. The app will connect automatically to the online API:  
   `https://bibliotech-api-tnjq.onrender.com`

### Local (for development)
1. Clone the repository:  
   `git clone https://github.com/Wilcleyber/BiblioTech_Frontend.git`
2. (Optional) Change the `API_URL` in `script.js` to your local backend if needed.

# 📚 Bibliotech

Bibliotech is a simple yet functional **Book Management System**, created with **FastAPI (backend)** and **HTML/CSS/JS (frontend)**. It allows users to add, edit, delete, sort, and filter books using a modern API.

> 🌐 **Now with online API!**  
> Test the backend live: [Swagger UI Documentation](https://bibliotech-api-tnjq.onrender.com/docs)

---

## 🚀 Features

- Add, edit, and delete books
- Sort books by title or year of publication
- Filter/search by title, author, genre, publisher, or publication year
- Responsive and intuitive frontend
- Integration with online REST API (FastAPI + PostgreSQL)

---

## 🎥 Preview

### 🔍 Sorting & Filtering
![Sorting and Filtering](./assets/Bibliotech1.gif)

### ✏️ Adding, Editing, and Deleting
![CRUD Actions](./assets/Bibliotech2.gif)

---

## 🧩 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL (online) or SQLite (local, for development)

---

## 🛠️ How to Use

### Online (with deployed API)
1. Open `index.html` in your browser.
2. The app will connect automatically to the online API:  
   `https://bibliotech-api-tnjq.onrender.com`

### Local (for development)
1. Clone the repository:  
   `git clone https://github.com/Wilcleyber/bibliotech.git`
2. (Optional) Change the `API_URL` in `script.js` to your local backend if needed.

---

## 📡 Example API Usage

```js
// In script.js
const API_URL = 'https://bibliotech-api-tnjq.onrender.com';
// Example: fetch all books
fetch(`${API_URL}/livros`).then(res => res.json()).then(console.log);
```

---

## 📄 License

Project for study and portfolio purposes. Feel free to contribute!



