# 🏡 Homyz — Real Estate Website with AI Chatbot

A modern, full-stack real estate platform that combines sleek property discovery with a Google Gemini-powered AI chatbot. Users can explore premium residencies, search and filter listings dynamically, view interactive geographical maps, book property visits, and chat with an intelligent AI assistant capable of smart property matching.

---

## 📸 Screenshots & Demo

### 1. Landing Page & Hero Section
![Hero Section](./screenshots/01-hero-landing.png)

### 2. Popular Residencies Carousel
![Popular Residencies](./screenshots/02-popular-residencies.png)

### 3. All Properties Search & Exploration
![Properties Grid](./screenshots/03-property-listings.png)

### 4. Property Details & Interactive Leaflet Map
![Property Details & Map](./screenshots/04-property-details-map.png)

### 5. Contact & AI Chatbot Assistant
![Contact and AI Chat](./screenshots/05-contact-and-ai-chat.png)

---

## ✨ Key Features

- 🔍 **Dynamic Property Search**: Filter listings by title, city, or country instantly.
- 🤖 **Google Gemini AI Assistant**: Built-in chatbot powered by Gemini API that understands natural language queries (e.g., *"Show me coffee estates in Chikmagalur"*, *"Find beach villas under 1.5 Cr"*) and returns formatted property cards.
- 🗺️ **Interactive Maps**: Real-time property geocoding and visual mapping using Leaflet.
- 📅 **Visit Scheduling**: Book and manage property visits with a date picker.
- ❤️ **Favorites / Wishlist**: Save favorite residencies tied to your authenticated profile.
- ➕ **Add New Residencies**: Upload photos, enter facilities (bedrooms, bathrooms, parking), set locations, and publish listings.
- 🔐 **Secure Authentication**: End-to-end user authentication with Auth0 (OAuth2 / JWT Bearer tokens).

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [React](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/))
- **UI Components**: [Mantine UI](https://mantine.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Sliders & Carousel**: [Swiper.js](https://swiperjs.com/)
- **Maps**: [Leaflet](https://leafletjs.com/) & `react-leaflet`
- **State & Data Fetching**: [React Query](https://tanstack.com/query), [Axios](https://axios-http.com/)
- **Authentication**: [@auth0/auth0-react](https://auth0.com/docs/libraries/auth0-react)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

### Backend (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database & ORM**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) with [Prisma ORM](https://www.prisma.io/)
- **AI Engine**: Google Gemini API (`gemini-2.5-flash` with automatic fallback)
- **Auth & Security**: `express-oauth2-jwt-bearer` (RS256 JWT validation)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB Atlas](https://www.mongodb.com/) account or local MongoDB instance
- [Google AI Studio API Key](https://aistudio.google.com/app/apikey)
- [Auth0](https://auth0.com/) account

---

### 1. Clone the Repository
```bash
git clone https://github.com/Abhijith099/Real-Estate-Website-with-AI-Chatbot.git
cd Real-Estate-Website-with-AI-Chatbot
```

---

### 2. Backend Setup (`/server`)

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on [.env.example](./server/.env.example):
   ```bash
   cp .env.example .env
   ```

4. Populate your `.env` variables:
   ```env
   PORT=8000
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/YourDB?retryWrites=true&w=majority"
   GEMINI_API_KEY=your_gemini_api_key_here
   AUTH0_AUDIENCE=http://localhost:8000
   AUTH0_ISSUER_BASE_URL=https://<your-tenant>.auth0.com
   ```

5. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server runs on `http://localhost:8000`.*

---

### 3. Frontend Setup (`/client`)

1. Open a new terminal and navigate to client:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client runs on `http://localhost:5173`.*

---

## 🔒 Security & Environment Variables

Never commit your `.env` files to Git. The project includes:
- Root [`.gitignore`](./.gitignore) preconfigured to ignore `.env`, `node_modules`, and build files.
- Safe template [`server/.env.example`](./server/.env.example) for easy setup.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
