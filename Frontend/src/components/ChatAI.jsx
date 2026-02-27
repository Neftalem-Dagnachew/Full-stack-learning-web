
import "../components/style/ChatComponent.css";

import { useState } from "react";

function ChatComponent() {

  // const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

  return(
    <>
      {/* <div className="all_container"> */}
        <div className="chat_component">
          {openMenu && (
            <div className="chat_window_container">
              <h1>go</h1>
            </div>
          )}

          <button className="chat_toggle_btn" onClick={() => setOpenMenu(!openMenu)}>{openMenu ? "Close Chat" : "Open Chat"}</button>
        </div>
        {/* </div> */}
    </>
  )
}

export default ChatComponent;