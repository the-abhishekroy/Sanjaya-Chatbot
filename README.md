# 🌾 Sanjaya: AI Farming Assistant

Sanjaya is an intelligent chatbot designed to assist farmers in **Northeast India** by providing **expert agricultural guidance** and **local farming insights**. The chatbot is built using **Next.js** for the frontend and **Dhenu AI** for agricultural intelligence, with **Vercel** handling deployment.

## ✨ Features

- 🌱 **Expert Agricultural Guidance** - Get instant answers to farming queries.
- 🌍 **Local Focus** - Specialized for Northeast Indian farming conditions.
- ⏳ **24/7 Support** - Always available to assist farmers.
- 🗣 **Multi-language Support** - Communicate in local languages.
- ☁️ **Real-time Weather Integration** - Get weather-based farming advice.

## 🏗 Tech Stack

### Frontend:
- ⚛️ Next.js (React Framework)
- 🎨 Tailwind CSS (Styling)

### AI & Backend:
- 🤖 Dhenu AI (AI Chat API)
- ☁️ Vercel (Deployment Platform)

## 📂 File Structure

```
|   README.md
|   .env.example
|
+---public
|       banner.png
|       screenshot1.png
|       screenshot2.png
|
+---src
|   |   app.js
|   |   index.js
|   |
|   +---components
|   |       ChatInterface.js
|   |       WeatherWidget.js
|   |
|   \---services
|           api.js
|
+---styles
|       global.css
|
\---utils
        helpers.js
```

## 🚀 Installation & Setup

### Prerequisites:
Make sure you have **Node.js (v18.0 or higher)** installed.

### Steps to Run:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/the-abhishekroy/Sanjaya-Chatbot.git
   cd Sanjaya-Chatbot
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   ```bash
   cp .env.example .env.local
   ```
   Add your API keys in `.env.local`:
   ```plaintext
   DHENU_API_KEY=your_api_key_here
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000) 🌱.

## 🤝 Contributing

Want to contribute? Follow these steps:
- 🍴 Fork the repository.
- 🌿 Create a new branch (`git checkout -b feature-branch`).
- ✅ Commit your changes (`git commit -m "Added new feature"`).
- 🚀 Push to the branch (`git push origin feature-branch`).
- 🔥 Open a pull request.

## 📜 License

This project is open-source and available under the **MIT License**.

---

👨‍💻 **Author:**
- **Abhishek Roy**  
- **GitHub**: [the-abhishekroy](https://github.com/the-abhishekroy)  
- **Email**: [the.abhishekkroy@gmail.com](mailto:the.abhishekkroy@gmail.com)

---

📩 Feel free to open an issue or contact me for suggestions or improvements! 🚜

