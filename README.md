# 🧠 Online Quiz Application  

An interactive **web-based quiz platform** that enables users to take quizzes, view scores, and manage questions easily.  
Built with **React (Vite)** for the frontend and **Spring Boot + SQLite** for the backend, it’s lightweight, responsive, and easy to deploy anywhere.  

---

## 🚀 Features  

### 👨‍🎓 User Features  
- Take quizzes by topic or category  
- Real-time scoring and feedback  
- Timer-based questions  
- Review correct and incorrect answers  
- User login and registration  

### 🧑‍💼 Admin Features  
- Add, edit, or delete questions  
- Manage quiz categories and difficulty levels  
- Track user performance  
- Secure admin access  

### ⚙️ Technical Highlights  
- Full-stack app (React + Spring Boot + SQLite)  
- RESTful API integration  
- JWT-based authentication  
- Pagination and sorting for quiz management  
- Validation and error handling  
- Lightweight database (SQLite) for simplicity  

---

## 🧩 Tech Stack  

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + Vite + Axios + Chakra UI / Tailwind CSS |
| **Backend** | Spring Boot + Spring Data JPA + SQLite |
| **Database** | SQLite |
| **Build Tools** | Maven, npm/vite |
| **Version Control** | Git & GitHub |

---

## 🧠 Project Structure  

Online-Quiz-Application/
├── backend/
│ ├── src/main/java/com/quizapp/
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ ├── model/
│ │ └── QuizApplication.java
│ └── src/main/resources/
│ └── application.properties
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── App.css
│ ├── public/
│ └── vite.config.js
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup  

### 🖥 Backend Setup  

1. Navigate to the backend directory:  
   ```bash
   cd backend
Configure SQLite in application.properties:

properties
Copy code
spring.datasource.url=jdbc:sqlite:quiz_app.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.database-platform=org.hibernate.dialect.SQLiteDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Run the backend:

bash
Copy code
mvn spring-boot:run
The backend will start at: http://localhost:8080

💻 Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Frontend will run at: http://localhost:5173

🧾 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/quizzes	Get all quizzes
GET	/api/quizzes/{id}	Get quiz by ID
POST	/api/quizzes	Add a new quiz
PUT	/api/quizzes/{id}	Update quiz
DELETE	/api/quizzes/{id}	Delete quiz
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user

🧑‍💻 Contributing
Fork this repository

Create a feature branch

bash
Copy code
git checkout -b feature-name
Commit your changes

bash
Copy code
git commit -m "Added new feature"
Push to your branch

bash
Copy code
git push origin feature-name
Create a Pull Request 🎉

🧱 Future Enhancements
Add leaderboard and analytics dashboard

Email quiz results

Question import/export (CSV)

Multi-language support

Dark/light mode toggle

📜 License
This project is licensed under the MIT License — feel free to use, modify, and distribute it.

pgsql
Copy code

Would you like me to include a short **“How to run both frontend & backend together (concurrently)”
