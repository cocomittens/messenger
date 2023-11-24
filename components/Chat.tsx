"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages } from "@/services/messageService";
import { MessageType } from "@/types/Chat";
import Message from "@/components/Message";
import { TextField } from "@mui/material";

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
      <TextField placeholder="Enter message..." variant="outlined" />
    </div>
  );
};

export default Chat;
