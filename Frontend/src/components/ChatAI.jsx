
import "../components/style/ChatComponent.css";

import { useState } from "react";

function ChatComponent() {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
      <div className="all_container d-flex">
        <div className="chat_component w-50 mt-5 d-flex gap-5">
          {isOpen && (
            <div className="chat_window_container">
              we
            </div>
          )}

          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close Chat" : "Open Chat"}</button>
        </div>
      </div>
    </>
  )
}

export default ChatComponent;