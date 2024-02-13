import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
    const [userMessage, setUserMessage] = useState('');
    const [chatbox, setChatbox] = useState([]);
    const api_key = "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";
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const generateResponse = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api_key}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        };

        fetch(API_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
                const newChatbox = [...chatbox];
                newChatbox[newChatbox.length - 1].message = data.choices[0].message.content;
                setChatbox(newChatbox);
            })
            .catch((e) => {
                const newChatbox = [...chatbox];
                newChatbox[newChatbox.length - 1].message = 'Oops! Something went wrong!';
                setChatbox(newChatbox);
            });
    };

    const handleChat = () => {
        const trimmedMessage = userMessage.trim();
        if (!trimmedMessage) return;

        // Appending the user's message to the chatbox
        setChatbox(prevChatbox => [...prevChatbox, { role: "user", message: trimmedMessage }]);

        // Add 'Thinking...' message to the chatbox
        setChatbox(prevChatbox => [...prevChatbox, { role: "chatbot", message: "Thinking...." }]);

        // Generate and update the response after a delay
        setTimeout(() => {
            generateResponse();
        }, 600);

        // Clear the input field
        setUserMessage('');
    };

    const chatLiList = chatbox.map((chat, index) => (
        <li key={index} className={`chat ${chat.role === "user" ? "outgoing" : "incoming"}`}>
            {chat.role === "user" ? (
                <p>{chat.message}</p>
            ) : (
                <>
                    <span className="material-symbols-outlined">Smart_Toy</span>
                    <p>{chat.message}</p>
                </>
            )}
        </li>
    ));

    return (
        <div className="show_chatbot">
            <button className="chatbot-toggle" onClick={() => document.body.classList.toggle("show_chatbot")}>
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>
            <div className="chatbot">
                <header>
                    <h2>Chatty The ChatBot 🤖</h2>
                </header>
                <ul className="chatbox">{chatLiList}</ul>
                <div className="chat-input">
                    <textarea
                        placeholder="Write your message..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        required
                    ></textarea>
                    <span className="material-symbols-outlined" onClick={handleChat}>
                        prompt_suggestion
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;
