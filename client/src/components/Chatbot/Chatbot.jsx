import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // 🎉 Initial welcome message when chatbot opens
  useEffect(() => {
    const welcomeMsg = {
      from: "bot",
      text: "👋 Hi! I’m your AI Real Estate Assistant. How can I help you today?",
    };
    setMessages([welcomeMsg]);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Add typing animation
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      let botReply = "⚠️ Something went wrong.";

      if (res.ok) {
        const data = await res.json();
        botReply = data.reply || "⚠️ No response from AI.";
      } else {
        const errText = await res.text();
        console.error("Backend error:", errText);
        botReply = "⚠️ Server unreachable. Try again later.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Network error. Please check your connection.",
        },
      ]);
    }

    setIsTyping(false);
  };

  // 🧠 Smart parsing of text + image URL detection
  const renderMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      const isUrl = /^https?:\/\/[^\s]+$/.test(part);

      if (isUrl) {
        if (
          part.match(/\.(jpeg|jpg|png|gif)$/i) ||
          part.includes("wp-content") ||
          part.includes("upload")
        ) {
          return (
            <div key={index} className="chat-image-container">
              <img src={part} alt="img" className="chat-image" loading="lazy" />
            </div>
          );
        }
      }

      return (
        <p key={index} className="chat-line">
          {part}
        </p>
      );
    });
  };

  return (
    <div className="chatbot-wrapper">
      <h2 className="chatbot-title">🏠 AI Real Estate Chat Assistant</h2>

      <div className="chat-window">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message-bubble ${msg.from === "user" ? "user" : "bot"}`}
          >
            {renderMessage(msg.text)}
          </div>
        ))}

        {/* Typing animation */}
        {isTyping && (
          <div className="typing-bubble">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything about properties..."
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
