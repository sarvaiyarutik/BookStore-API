# 📚 BookStore API

A RESTful **Book Store API** built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project provides backend APIs to manage books with complete CRUD operations, image upload support, MongoDB database integration, middleware-based error handling, and a clean project structure.

---

## 🚀 Features

- 📖 Add a new book
- 📚 Get all books
- 🔍 Get a single book by ID
- ✏️ Update book details
- 🗑️ Delete a book
- 🖼️ Upload book images using Multer
- 🍃 MongoDB database integration
- ⚡ Express.js REST API
- 🛡️ Custom error-handling middleware
- 🔐 Environment variable support using dotenv
- 🔄 Nodemon support for development
- 📁 Organized MVC-style project structure

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend web framework |
| **MongoDB** | Database |
| **Mongoose** | MongoDB ODM |
| **Multer** | Image/file upload |
| **dotenv** | Environment variables |
| **Nodemon** | Development server |

---

## 📂 Project Structure

```text
BookStore-API/
│
├── config/
│   └── database.js
│
├── controller/
│   └── bookController.js
│
├── middleware/
│   ├── httpError.js
│   └── upload.js
│
├── model/
│   └── bookModel.js
│
├── router/
│   └── bookRouter.js
│
├── uploads/
│   └── book images
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/sarvaiyarutik/BookStore-API.git
```

### 2. Navigate to the project

```bash
cd BookStore-API
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=1000
MONGO_URL=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own MongoDB Atlas or local MongoDB connection.

> ⚠️ Never upload your `.env` file or database credentials to GitHub.

---

## ▶️ Run the Project

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The server will run on:

```text
http://localhost:1000
```

---

# 📡 API Endpoints

## 📖 Book APIs

### Add Book

```http
POST /book/add
```

Used to create a new book.

**Request type:** `multipart/form-data`

Example fields:

```text
bookName
bookAuthor
bookDescription
bookPrice
bookImg
```

`bookImg` should contain the book image file.

---

### Get All Books

```http
GET /book/getAll
```

Returns all books stored in the database.

---

### Get Book By ID

```http
GET /book/:id
```

Returns a specific book using its MongoDB ID.

Example:

```http
GET /book/68xxxxxxxxxxxxxxxxxxxxxx
```

---

### Update Book

```http
PUT /book/:id
```

Updates an existing book.

**Request type:** `multipart/form-data`

Example fields:

```text
bookName
bookAuthor
bookDescription
bookPrice
bookImg
```

---

### Delete Book

```http
DELETE /book/:id
```

Deletes a book using its MongoDB ID.

---

# 🧪 Testing with Postman

You can test all APIs using **Postman**.

### Example API Flow

```text
1. POST   /book/add
        ↓
2. GET    /book/getAll
        ↓
3. GET    /book/:id
        ↓
4. PUT    /book/:id
        ↓
5. DELETE /book/:id
```

For the `POST` and `PUT` APIs, select:

```text
Body → form-data
```

and add the required book fields and image.

---

# 🏗️ Architecture

This project follows a simple MVC-style backend architecture.

```text
Client / Postman
       │
       ▼
    Router
       │
       ▼
  Controller
       │
       ▼
    Model
       │
       ▼
   MongoDB
```

### Router

Handles API routes and connects requests to controllers.

### Controller

Contains the main business logic for creating, reading, updating, and deleting books.

### Model

Defines the MongoDB/Mongoose book schema.

### Middleware

Handles common functionality such as file uploads and HTTP errors.

### Config

Handles the MongoDB/database configuration.

---

# 📦 NPM Scripts

```bash
npm start
```

Starts the application using Node.js.

```bash
npm run dev
```

Starts the application using Nodemon for development.

---

# 🎯 Learning Objectives

This project was created to practice and understand:

- Node.js fundamentals
- Express.js
- REST API development
- MVC architecture
- MongoDB
- Mongoose
- CRUD operations
- Middleware
- File uploads with Multer
- Error handling
- Environment variables
- API testing with Postman

---

# 🔮 Future Improvements

Possible future improvements:

- 🔐 User authentication with JWT
- 👤 User registration and login
- 👨‍💼 Admin authorization
- 🔎 Book search and filtering
- 📄 Pagination
- ⭐ Book reviews and ratings
- 🛒 Shopping cart
- 💳 Payment gateway integration
- ☁️ Cloud image storage
- 🚀 API deployment

---

# POST Data 
<img width="1096" height="932" alt="image" src="https://github.com/user-attachments/assets/833a76e2-82e0-45d0-b101-7370cc23c3c0" />

#Get All
<img width="1084" height="935" alt="Screenshot 2026-10-06 161735" src="https://github.com/user-attachments/assets/fe1da89d-2a23-45f3-a548-a1de7fdc4da1" />

#Get By Id 
<img width="1107" height="993" alt="Screenshot 2026-10-06 161751" src="https://github.com/user-attachments/assets/87d1a2ca-a85b-4284-8f67-beff8c43e15d" />

#Delete 
<img width="1123" height="995" alt="Screenshot 2026-10-06 161822" src="https://github.com/user-attachments/assets/199bec4b-b6c4-4a79-969b-c4af3e7f6113" />

#Update
<img width="1375" height="972" alt="image" src="https://github.com/user-attachments/assets/4c534589-0d8b-4087-9b9f-98b3ee284842" />

# Video 
https://drive.google.com/file/d/1gZXwgz_mrhABl6jgSx4yY5eIXNnBdiId/view?usp=sharing


# 👨‍💻 Author

**Rutik Sarvaiya**

Full Stack Web Development Student

- GitHub: [sarvaiyarutik](https://github.com/sarvaiyarutik)
- Project: [BookStore-API](https://github.com/sarvaiyarutik/BookStore-API)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**Made with ❤️ using Node.js, Express.js & MongoDB**
