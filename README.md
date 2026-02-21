# 🏥 Prescripto — Hospital Appointment Booking System

A full-stack web application that enables patients to book appointments with doctors online, while providing dedicated dashboards for Doctors and Administrators to manage schedules, patients, and appointments efficiently.

🔗 **Live Demo**

* 🌐 Patient Frontend: https://hospitalfrontend-snowy.vercel.app
* 🛠️ Admin Panel: https://hospitaladmin-weld.vercel.app
* ⚙️ Backend API: https://carepartner.onrender.com

---

## 📌 Project Overview

Prescripto is a complete hospital appointment management system designed to simplify healthcare scheduling and administration.

The system includes three separate modules:

* 👤 Patient Portal (Frontend)
* 👨‍⚕️ Doctor Panel
* 🛠️ Admin Dashboard

Patients can search doctors, view availability, and book appointments online. Doctors can manage appointments and update their profile. Administrators can monitor the entire system, manage doctors, and oversee bookings.

---

## ✨ Key Features

### 👤 Patient Module

* User registration & login (authentication)
* Browse doctors by speciality
* View doctor profiles
* Check doctor availability
* Book appointments online
* Secure online payment integration (Razorpay)
* View appointment history

---

### 👨‍⚕️ Doctor Module

* Secure doctor login
* View scheduled appointments
* Mark appointments as completed
* Cancel appointments
* Manage availability status
* Update profile details (fees, address, etc.)
* Dashboard with appointment statistics

---

### 🛠️ Admin Module

* Admin authentication
* Add new doctors to the system
* Manage doctor records
* View all appointments
* Cancel appointments if needed
* Monitor system activity

---

## 🏗️ System Architecture

This project follows a full-stack architecture:

Frontend → Backend API → Database

* Frontend and Admin Panel communicate with backend via REST APIs
* Backend handles authentication, business logic, and database operations
* MongoDB stores users, doctors, and appointment data

---

## 🧰 Tech Stack

### Frontend (Patient & Admin)

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt (password hashing)

### Payment Integration

* Razorpay Payment Gateway

### Deployment

* Frontend & Admin: Vercel
* Backend API: Render
* Database: MongoDB Atlas

---

## 🔐 Authentication & Security

* JSON Web Token (JWT) based authentication
* Password hashing using bcrypt
* Protected routes for doctors and admins
* Secure API communication

---

## 💳 Payment Integration

Razorpay is integrated to allow secure online appointment payments.

* Order creation on backend
* Payment processing on frontend
* Signature verification for security
* Appointment confirmation after successful payment

---

## 📊 Database Design

The database includes collections for:

* Users (Patients)
* Doctors
* Appointments
* Admin data

MongoDB Atlas is used as the cloud database service.

---

## 🚀 How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/chandupatil07/Hospital_Appointements.git)
cd[ your-repo-name](https://github.com/chandupatil07/Hospital_Appointements.git)
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run server
```

Create a `.env` file in backend folder with:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_key
```

---

### 4️⃣ Setup Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## 📷 Screenshots

<!-- Add screenshots here for better presentation -->

---

## 🎯 Real-World Use Case

This system can be used by hospitals or clinics to:

* Reduce manual appointment booking
* Improve scheduling efficiency
* Provide better patient experience
* Digitize hospital management

---

## 👨‍💻 Author

**Chandrasekhar Patil**

<!-- You can add your LinkedIn/GitHub -->

---

## 📌 Future Improvements

* Video consultation feature
* Email/SMS notifications
* Online prescription system
* Role-based access enhancements
* Mobile application support

---

## ⭐ Conclusion

Prescripto demonstrates a complete real-world full-stack application with authentication, payment integration, role-based dashboards, and cloud deployment — making it suitable for modern healthcare management needs.




