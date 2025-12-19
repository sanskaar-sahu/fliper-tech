# 🏢 RealEstate Pro – Landing Page & Admin Portal

A modern **Real Estate Landing Page** built using **React + Tailwind CSS**, featuring dynamic project listings, client testimonials, and a backend-connected contact form.  
Includes an **Admin Portal** for managing content and user inquiries.

---

## 🚀 Features

### 🌐 Public Landing Page
- Responsive **Hero Section**
- **Featured Projects** (dynamic)
- **Client Testimonials**
- **Contact Form** with required fields:
  - Full Name
  - Email
  - Mobile
  - City
- Modern UI with smooth transitions
- Mobile-first, fully responsive design

### 🔐 Admin Portal
- Admin navigation access
- Manage:
  - Projects
  - Client testimonials
  - Contact form submissions
- Centralized state using Context API

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Lucide Icons
- Context API

### Backend (Expected / Integrated)
- Node.js
- Express.js
- MongoDB
- REST APIs

---

📂 Project Structure
src/
│── components/
│ ├── LandingPage.jsx
│ ├── ContactSection.jsx
│
│── utils/
│ ├── AppContext.jsx
│
│── assets/
│
│── App.jsx
│── main.jsx
│
public/
│── favicon.png

🧾 Contact Form Data


---

## 🧾 Contact Form Payload

The contact form sends the following validated fields to the backend:

```js
{
  fullName: string,
  email: string,
  mobile: string,
  city: string
}
```

## ▶️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/realestate-pro.git
cd realestate-pro


2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev

The app will run at:

http://localhost:5173

🔧 Environment Variables (Optional)

env (backend ) appears like this :
PORT=5000
MONGO_URI=connectionlink
JWT_SECRET=FLIPERSECRETKEY      
CLIENT_URL=http://localhost:3000    
CLOUDINARY_KEY_NAME=FLIPR
CLOUDINARY_API_KEY=
CLIUDINARY_API_SECRET=


VITE_API_BASE_URL=http://localhost:5000
````

## 🎨 UI & Design

- Tailwind-based modern layout  
- Glassmorphism navbar  
- Gradient hero section  
- Card-based project & testimonial UI  
- Rounded favicon for branding consistency  

---

## 📸 Screenshots

<img width="1155" height="837" alt="Landing Page" src="https://github.com/user-attachments/assets/ee3602a9-02fe-4014-9494-605427a51543" />

<img width="1070" height="837" alt="Projects Section" src="https://github.com/user-attachments/assets/523cc242-393c-4890-be09-c1de0946482c" />

<img width="1796" height="588" alt="Testimonials Section" src="https://github.com/user-attachments/assets/83cffdbd-7c3e-4a15-a4fb-76655a355786" />

<img width="1804" height="511" alt="Contact Section" src="https://github.com/user-attachments/assets/5ae876b9-aa65-4416-8b9a-9c51982d7892" />

---

## ✅ Best Practices Followed

- Controlled & validated forms  
- Clean component separation  
- Reusable UI patterns  
- Backend-compatible payloads  
- Fully responsive design  

---

## 📈 Future Enhancements

- Authentication for Admin Portal  
- Dashboard analytics  
- Email notifications  
- Pagination for projects & clients  
- SEO optimization  

---

## 🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Sanskar Sahu**  
B.Tech | Full-Stack Developer  
Passionate about building scalable and clean web applications 🚀
