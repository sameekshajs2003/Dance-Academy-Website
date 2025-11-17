# 💃 Dance Academy Website

A simple and clean **Express + Handlebars + MongoDB** web app for registering students for dance classes. Includes form validation, templated views, and an organized project structure.

---

## 🚀 Features

The website provides the following user-facing features:

- ✨ Browse the dance styles taught (Bharatanatyam, Salsa, Zumba, Bollywood/freestyle, etc.)
- 🧾 View class information for each dance style (schedules, level, class requirements)
- 📝 Register for one or more dance styles using the registration form
- 🛢️ Registrations are stored in MongoDB (via Mongoose)
- 🔐 Client- and server-side validation with friendly duplicate checks for email & phone

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, Handlebars
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Templating:** Handlebars (HBS)
- **Environment:** dotenv
- **Validation:** Client-side JavaScript

---

## 📂 Project Structure

```
app.js                     → Main Express server
db/connect.js              → MongoDB connection
models/registers.js        → Mongoose schema
templates/views/           → Main Handlebars pages
templates/partials/        → Navbar + shared parts
public/css/style.css       → Styling
public/images/             → All website images
backup/                    → Old template backups
```

---

## 🔧 Setup Instructions (Windows / CMD)

### 1️⃣ Navigate to the project folder

```
cd "C:\Users\Sameeksha J S\OneDrive\Desktop\p\Dance-Academy-Website"
```

### 2️⃣ Create your environment file

```
copy .env.example .env
```

Edit `.env` and add:

```
MONGO_URI=your_mongodb_uri
PORT=3000
```

### 3️⃣ Move all images to the correct folder

```
mkdir public\images
move *.png public\images\
move *.jpg public\images\
move *.webp public\images\
```

### 4️⃣ Install dependencies

```
npm install
```

### 5️⃣ Start the app

Development:

```
npm run dev
```

Production:

```
npm start
```

Open your browser → **http://localhost:3000**
Registration page → **/register**

---

## 📝 Notes

- Email + Phone Number are **unique** — duplicates show friendly errors.
- Form re-fills previously entered data on failure.
- Multiple dance styles are supported using checkbox arrays.
- Ensure MongoDB is running if connecting locally.

---

## 🔒 Security / Improvements (optional)

- Add `helmet` + rate limiting for production
- Add `express-validator` for strong backend validation
- Move to a full MERN stack by adding a React client later

---

If you want this README **shorter**, **more aesthetic**, or **with icons/badges**, I can format it accordingly!
