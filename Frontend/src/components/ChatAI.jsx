
import "../components/style/ChatComponent.css";

import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';

function ChatComponent() {;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/ask-ai", { prompt: input });
      const aiMessage = { role: "ai", text: response.data.answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, an error occurred." }]);
    }
    setLoading(false);
  };

  return(
    <>
      <div className="all_container">
        <div className="d-flex justify-content-center align-items-end chatAi_container">
          <div className="chatAi_box w-100 text-center">

            <div className="chat-container">
              <div className="chat-box">
                  {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.role}`}>
                    <div className="bubble">
                      {msg.text}
                    </div>
                </div>
                ))}

                {loading && (
                  <div className="message ai">
                    <div className="bubble">Typing...</div>
                  </div>
                )}
            </div>
          </div>

            <div className="input_wrapper w-50">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                type="text"
                className="chat_input"
                placeholder="Say something..."
              />
              <button onClick={handleSend} className="chat_btn">Enter</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ChatComponent;