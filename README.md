# 📍 Real-Time Location Tracker

A real-time location tracking backend application built using **Node.js**, **Express**, and **Socket.IO**.  
This project enables **live location updates** using an **event-driven architecture** and seamless **bidirectional communication** between clients and the server.

🔗 **Live Demo:**  
https://real-time-location-tracker-bq2n.onrender.com

---

## 🚀 Features

- 🌐 Real-time location tracking using WebSockets
- 🔁 Bidirectional communication with Socket.IO
- ⚡ Instant UI updates without page refresh
- 📡 Event-driven backend architecture
- 🧩 Handles multiple connected clients efficiently
- ☁️ Deployed on Render

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Real-time Communication:** Socket.IO  
- **Frontend:** HTML, CSS, JavaScript  
- **Deployment Platform:** Render

---

## 🧠 Architecture Overview

1. Client connects to the server using Socket.IO
2. Client emits location data (latitude & longitude)
3. Server listens for location events
4. Location updates are broadcast to all connected clients
5. UI updates instantly in real time

---

## ▶️ Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rashikatyagi/real-time-location-tracker.git
cd real-time-location-tracker
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Run the Server
```bash
node server.js
```
### 4️⃣ Open in Browser
```bash
http://localhost:3000
```
