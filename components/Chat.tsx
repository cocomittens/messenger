"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages } from "@/services/messageService";
import { Message } from "@/types/Chat";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then((messages) => setMessages(messages));
  }, []);

  console.log(messages);

  return (
    <div>
      {messages.map((message: Message) => (
        <div key={message.id}>{message.message}</div>
      ))}
    </div>
  );
};

export default Chat;
