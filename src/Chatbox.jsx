import React from 'react'
import "./Chatbox.css"

const Chatbox = () => {
  const sendChatBtn = document.querySelector('.chat-input span');
const chatInput = document.querySelector('.chat-input textarea');
const chatbox = document.querySelector('.chatbox');
let userMessage;
const api_key = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

const chatbotToggler= document.getElementById("chatbot_toggle");


const generateResponse = (incomingChatLi) =>{
    const messageElement = incomingChatLi.querySelector("p");
    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${api_key}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content : userMessage}] 
        })
    }
    
    fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {messageElement.textContent  = data.choices[0].message.content;})
     .catch((e) => {messageElement.textContent = 'Oops! Something went Wrong!'});

     messageElement.style.marginTop = '1rem';
}

const createChatLi = (message,className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    let chatContent = className === 'outgoing' ? `<p>${message}</p>` : `<span class="material-symbols-outlined">Smart_Toy</span><p>${message}</p>` 
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    // UserMessage takes the message from the user
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Appending the user's message to the chatbox
    const outgoingChatLi = createChatLi(userMessage, "outgoing");
    chatbox.appendChild(outgoingChatLi);
     

    // Declare incomingChatLi before setTimeout to make it accessible outside the block
    let incomingChatLi;

    setTimeout(() => {
        incomingChatLi = createChatLi("Thinking....", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi); // Move the generateResponse call inside setTimeout
    }, 600);
};



sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show_chatbot"));
  return (
    <>
      <div class="show_chatbot">
    <button class="chatbot-toggle" id="chatbot_toggle">
        <span class="material-symbols-outlined">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
        <header>
            <h2>Chatty The ChatBot 🤖</h2>
        </header>
        <ul class="chatbox">
            <li class="chat incoming">
                <span class="material-symbols-outlined">Smart_Toy</span>
                <p>Hi Im Chatty!👋 <br />
                    How can i help you today?</p>
            </li>
            <div class="chat outgoing">

            </div>
        </ul>
        <div class="chat-input">
            <textarea placeholder="Write your message..." required></textarea>
            <span id="send-btn" class="material-symbols-outlined">prompt_suggestion</span>

        </div>

    </div>
</div>
    </>
  )
}

export default Chatbox
