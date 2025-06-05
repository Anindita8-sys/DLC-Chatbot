document.getElementById("chat-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const lang = document.getElementById("language").value;
  const tone = document.getElementById("tone").value;
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  addMessage("bot", "Typing...");

  const response = await fetch("https://your-render-url/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, lang, tone })
  });

  const data = await response.json();
  const botMessages = document.querySelectorAll(".bot");
  botMessages[botMessages.length - 1].textContent = data.reply;

  // Text-to-Speech
  const utterance = new SpeechSynthesisUtterance(data.reply);
  utterance.lang = lang === "hi" ? "hi-IN" : lang === "bn" ? "bn-IN" : "en-US";
  window.speechSynthesis.speak(utterance);
});

function addMessage(sender, text) {
  const chat = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Voice input
const micBtn = document.getElementById("mic");
micBtn.addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = document.getElementById("language").value === "hi" ? "hi-IN" :
                     document.getElementById("language").value === "bn" ? "bn-IN" : "en-US";
  recognition.start();
  recognition.onresult = function(event) {
    document.getElementById("user-input").value = event.results[0][0].transcript;
  };
});
