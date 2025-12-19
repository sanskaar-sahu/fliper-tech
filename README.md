🏢 RealEstate Pro – Landing Page & Admin Portal

A modern Real Estate Landing Page built with React + Tailwind CSS, featuring dynamic projects, client testimonials, and a backend-connected contact form.
Includes an Admin Portal for managing projects, clients, and contact submissions.

🚀 Features
🌐 Public Landing Page

Elegant Hero Section

Dynamic Projects section

Client Testimonials

Contact Form (Full Name, Email, Mobile, City)

Responsive design (mobile-first)

Smooth UI with modern icons

🔐 Admin Portal

Secure admin navigation

View and manage:

Projects

Client testimonials

Contact form submissions

Centralized state management via Context API

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Lucide Icons

Context API

Backend (Expected / Integrated)

Node.js

Express.js

MongoDB

REST APIs

📂 Project Structure
src/
│── components/
│   ├── LandingPage.jsx
│   ├── ContactSection.jsx
│
│── utils/
│   ├── AppContext.jsx
│
│── assets/
│
│── App.jsx
│── main.jsx
│
public/
│── favicon.png

🧾 Contact Form Data

The contact form collects mandatory fields:

fullName

email

mobile

city

These fields are validated on the frontend and sent to the backend using:

addContactForm({
  fullName,
  email,
  mobile,
  city
});

▶️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/realestate-pro.git
cd realestate-pro

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


The app will run at:

http://localhost:5173

🔧 Environment Variables (Optional)

Create a .env file if your backend requires API URLs:

VITE_API_BASE_URL=http://localhost:5000

🎨 UI & Design

Tailwind-based modern layout

Glassmorphism navbar

Gradient hero section

Card-based project & testimonial UI

Rounded favicon for branding consistency

📸 Screenshots

<img width="1155" height="837" alt="image" src="https://github.com/user-attachments/assets/ee3602a9-02fe-4014-9494-605427a51543" />
<img width="1070" height="837" alt="image" src="https://github.com/user-attachments/assets/523cc242-393c-4890-be09-c1de0946482c" />
<img width="1796" height="588" alt="image" src="https://github.com/user-attachments/assets/83cffdbd-7c3e-4a15-a4fb-76655a355786" />
<img width="1804" height="511" alt="image" src="https://github.com/user-attachments/assets/5ae876b9-aa65-4416-8b9a-9c51982d7892" />



 Best Practices Followed

Controlled & validated forms

Clean component separation

Reusable UI patterns

Backend-compatible payloads

Responsive design

 Future Enhancements

Authentication for Admin Portal

Dashboard analytics

Email notifications

Pagination for projects & clients

SEO optimization

 Contributing

Pull requests are welcome.
For major changes, please open an issue first.

 License

This project is licensed under the MIT License.

Author

Sanskar Sahu
B.Tech | Full-Stack Developer
🚀 Passionate about building scalable web applications

If you want, I can also:

Add backend README

Write API documentation

Make this README startup / investor ready

Add badges & deployment links
