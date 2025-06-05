# Digital Literacy Campaign Chatbot 🤖

A smart chatbot that teaches users how to use WhatsApp, Paytm, and Google Maps using step-by-step guides via ChatGPT API.

## 🧠 Features
- ChatGPT-powered answers
- Friendly interface with bubbles
- Secure Node.js backend to protect API key

## 🚀 How to Run

### 1. Backend (Node.js)
```bash
cd server
npm install
echo "OPENAI_API_KEY=your_key_here" > .env
node index.js
```

### 2. Frontend
Open `client/index.html` in a browser.

Make sure backend runs on http://localhost:3000

## 📝 Customize
You can modify `faq.json` or fine-tune prompt in `index.js` system message.

Happy Chatting!


## 🌐 Deployment Instructions

### Backend (Node.js on Render)
1. Create an account at https://render.com and link your GitHub.
2. Push the `server` folder to a GitHub repo.
3. On Render, click **New > Web Service**.
4. Choose your repo and set:
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Environment Variable: `OPENAI_API_KEY` = your ChatGPT API key
5. Deploy and note your URL (e.g., `https://dlc-chatbot-api.onrender.com`)

### Frontend (GitHub Pages)
1. Push the `client` folder to another GitHub repo (or sub-folder in same repo).
2. Go to Repo Settings > Pages.
   - Source: `main` branch
   - Folder: `/root`
3. You’ll get a public link like `https://username.github.io/dlc-chatbot/`
4. Update the `script.js` API fetch URL to your Render backend URL.

