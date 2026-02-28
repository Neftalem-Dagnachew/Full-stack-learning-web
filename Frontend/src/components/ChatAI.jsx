
import "../components/style/ChatComponent.css";

import { useState } from "react";

function ChatComponent() {

  // const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

  return(
    <>
      <div className="all_container">
        <div className="d-flex justify-content-center align-items-end chatAi_container">
          <div className="chatAi_box w-100 text-center">

            <div className="input_wrapper w-50">
              <input
                type="text"
                className="chat_input"
                placeholder="Say something..."
              />
              <button className="chat_btn">Enter</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ChatComponent;