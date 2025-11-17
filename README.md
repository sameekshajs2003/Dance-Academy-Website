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
## 📸 Screenshots

### 🟦 1. About Us Page  
<img src="https://github.com/user-attachments/assets/0953d26e-edcd-4df7-9907-e129d25039f5" width="700"/>

### 🟩 2. Dance Class Information  
<img src="https://github.com/user-attachments/assets/39f73c2e-048a-4fb4-aae1-582848e23294" width="700"/>

### 🟨 3. Registration Form  
<img src="https://github.com/user-attachments/assets/2697b2a0-66ff-4b07-b825-67ae9c2c410b" width="700"/>

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
```

---

## 🔧 Setup Instructions (Windows / CMD)

### 1️⃣ Navigate to the project folder

```
cd path/to/Dance-Academy-Website
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

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the app

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
