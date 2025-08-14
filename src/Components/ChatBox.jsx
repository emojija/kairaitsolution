import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";          // <-- NEW

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  /* Scroll to newest message */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  /* Send user msg + bot auto‑reply */
  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    /* Add user message */
    setMessages((prev) => [...prev, { text: trimmed, sender: "user" }]);
    setInput("");

    /* Bot reply (with contact link) */
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          withLink: true,              // <-- flag so we render a Link
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat FAB */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col mt-4">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <span>Chat with Us</span>
            <button onClick={toggleChat} className="text-lg font-bold">
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right ml-auto w-fit"
                    : "bg-gray-200 text-left mr-auto w-fit"
                }`}
              >
                {msg.withLink ? (
                  <>
                    Sorry! At that time we are not available.&nbsp;
                    Please fill the{" "}
                    <Link
                      to="/contact"
                      className="text-blue-600 underline font-medium"
                      onClick={() => setIsOpen(false)} /* close chat */
                    >
                      Contact
                    </Link>{" "}
                    form.
                  </>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message"
              className="flex-1 px-3 py-1 border rounded-l-md text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
