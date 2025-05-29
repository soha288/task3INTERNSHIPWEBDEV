# 🧪 Simple Express API - GET and POST Example

This is a minimal Node.js + Express app with basic **GET** and **POST** routes, perfect for testing with Postman.

---

## 🚀 Features

- Simple Express server
- `GET /` route that returns a welcome message
- `POST /submit` route that accepts JSON input
- Easily testable using Postman or curl

---

## 📦 Requirements

- Node.js (v14 or above recommended)
- npm (Node Package Manager)
- Internet connection (for initial `npm install`)
- Postman (or any REST client)

---

## 🛠️ Installation


# Clone the repository
git clone https://github.com/your-username/express-postman-demo.git
cd express-postman-demo

# Install dependencies
npm install
▶️ Running the Server
node index.js
This will start the server at:
http://localhost:3000

📫 API Endpoints
🔹 GET /

Test URL:
http://localhost:3000/

Response:
{
  "message": "Hello from Express!"
}

🔸 POST /submit

Test URL:
http://localhost:3000/submit

Body (JSON):
{
  "name": "John"
}

Response:
{
  "received": "John"
}


🧪 Testing in Postman

    Open Postman

    Set method to GET, URL to http://localhost:3000/ → click Send

    Set method to POST, URL to http://localhost:3000/submit

        Go to Body tab → Select raw → Choose JSON

        Paste:{
        "name": "TestUser"
              }
    Click Send
📁 File Structure

      express-postman-demo/
│
├── indextask3.js    # Main Express server
├── package.json     # npm config


        
