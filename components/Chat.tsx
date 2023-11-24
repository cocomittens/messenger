"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages } from "@/services/messageService";
import { MessageType } from "@/types/Chat";
import Message from "@/components/Message";
import { TextField } from "@material-ui/core";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then((messages) => setMessages(messages));
  }, []);

  return (
    <div>
      {messages.map((message: MessageType) => (
        <Message key={message.id} {...message} />
      ))}
      <TextField />
    </div>
  );
};

export default Chat;
