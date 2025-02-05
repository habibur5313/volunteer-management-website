<div align="center">
  <img height="1000" src="https://i.ibb.co.com/j5PDmXW/Screenshot-2025-01-11-105155.png"  />
</div>

# Volunteer Network  

## Introduction  
**Volunteer Network** is a **volunteer management platform** that allows organizations to **post volunteer opportunities** and enables users to **sign up as volunteers**. The system ensures **secure authentication**, **real-time updates**, and an **interactive dashboard** to manage events and track volunteer participation efficiently.  

## Table of Contents  
- [Live Demo](#live-demo)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [Configuration](#configuration)  
- [Contributors](#contributors)  
- [License](#license)  

## Live Demo  
🚀 **[Volunteer Network Live Website](https://volunteer-network-simple-website-nepn8pub0.vercel.app/)**  

🔗 **[Server Code Repository](https://github.com/habibur5313/assignment-11-volunteer-management-website-server)**  

## Features  
✅ **User Authentication**  
- Secure login and registration with **Firebase Authentication**.  
- **JWT-based authentication** for secure token management.  
- **Role-based access** with different permissions for volunteers, organizers, and admins.  

✅ **Volunteer Opportunities**  
- **Search** and filter volunteer events based on **title**.  
- **Detailed event pages** with title, description, location, deadline, and organizer information.  

✅ **Event Management**  
- **Create, update, and delete events** for organizations.  
- Volunteers can **sign up** for events through the platform.  

✅ **Real-Time Updates**  
- **Live dashboard** for real-time event updates and notifications using Firebase.  

✅ **Interactive UI**  
- **Tailwind CSS** for a **responsive and visually appealing** interface.  
- **User-friendly navigation** powered by **React.js**.  

✅ **Data Management**  
- **MongoDB** for secure and efficient **data storage and retrieval**.  
- **Analytics and reports** on volunteer participation and event success.  

## Installation  
### 1. Clone the Repository  
```bash
git clone https://github.com/habibur5313/volunteer-management-website.git
cd volunteer-management-website
```
### 2. Install Dependencies  
```bash
npm install
```
### 3. Set Up Environment Variables  
Create a `.env.local` file and add the following credentials:  
```env
VITE_apiKey=your_api_key_here
VITE_authDomain=your_auth_domain_here
VITE_projectId=your_project_id_here
VITE_storageBucket=your_storage_bucket_here
VITE_messagingSenderId=your_messaging_sender_id_here
VITE_appId=your_app_id_here
VITE_server=https://assignment-sever-11.vercel.app
```

### 4. Start the Development Server  
```bash
npm run dev
```

## Usage  
1. Open the **[Live Website](https://volunteer-network-simple-website-nepn8pub0.vercel.app/)**.  
2. **Sign up or log in** using Firebase Authentication.  
3. Browse **volunteer opportunities** and filter events based on title.  
4. Click on an event to view **detailed information** and **sign up** as a volunteer.  
5. **Organizations** can create, edit, and delete events.  
6. **Admins** can manage users and track volunteer participation.  

## Dependencies  
### **Technology Used**  
- **Frontend**: React, JavaScript, Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express.js, MongoDB  
- **Authentication**: Firebase, JWT  
- **Real-Time Updates**: Firebase  
- **Package Dependencies**:  
  - `axios`, `firebase`, `react-icons`, `react-tooltip`, `react-datepicker`, `swiper`, `sweetalert2`, `vite`, `eslint`  

## Configuration  
This project requires Firebase for authentication and MongoDB for data storage. Ensure all **environment variables** are correctly configured in `.env.local` before running the project.  

## Contributors  
👨‍💻 **Habibur Rahman**  
- GitHub: [habibur5313](https://github.com/habibur5313)  

## License  
This project is licensed under the **MIT License**.  

---

⭐ **Empower volunteering with Volunteer Network and make an impact today!**  
---
