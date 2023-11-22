import React, { useEffect, useState } from "react";
import { fetchMessages } from "@/services/messageService";
import { Message } from "@/types/Chat";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then((messages) => setMessages(messages));
  }, []);

  return (
    <div>
      {messages.map((message: Message) => (
        <div key={message.id}>{message.message}</div>
      ))}
    </div>
  );
};
