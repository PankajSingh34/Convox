# Convox - Real-Time Chat Application

A modern, real-time chat application built with Node.js, Express, Socket.io, MongoDB, and React.

## 🚀 Features

- **Real-time messaging** with Socket.io
- **User authentication** and registration
- **Live chat rooms** with instant message delivery
- **Modern React UI** with responsive design
- **Redux state management** for efficient data handling
- **Real-time notifications** for new messages
- **User online/offline status**

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - Database
- **JWT** - Authentication

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **Socket.io Client** - Real-time client
- **CSS3** - Styling

## 📁 Project Structure

```
Convox/
├── backend/                 # Backend server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Authentication middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── socket/             # Socket.io configuration
│   └── index.js            # Server entry point
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── redux/          # Redux store and slices
│   │   └── config.js       # Configuration
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PankajSingh34/Convox.git
   cd Convox
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📱 Usage

1. **Register** a new account or **Login** with existing credentials
2. **Start chatting** with other users in real-time
3. **Send messages** that appear instantly for all online users
4. **See who's online** and their current status

## 🔧 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login

### Messages
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Send a new message

### Socket Events
- `connection` - User connects
- `disconnect` - User disconnects
- `sendMessage` - Send a message
- `newMessage` - Receive a new message

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pankaj Singh**
- GitHub: [@PankajSingh34](https://github.com/PankajSingh34)

## 🙏 Acknowledgments

- Socket.io for real-time communication
- React team for the amazing UI library
- MongoDB for the database solution
- Express.js for the robust backend framework

---

⭐ Star this repository if you find it helpful!
