"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages, createMessage } from "@/services/messageService";
import { MessageType } from "@/types/Chat";
import Message from "@/components/Message";
import { TextField, Box, IconButton, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getAndSetMessages = () =>
    fetchMessages().then((messages) => setMessages(messages.reverse()));

  const handleSend = () => {
    createMessage({ message, user: "You", date: new Date(Date.now()) }).then(
      (message) => {
        getAndSetMessages();
      }
    );
  };

  useEffect(() => {
    getAndSetMessages();
  }, []);

  return (
    <Box
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Grid container direction="column" width="60vw">
        {messages.map((message: MessageType) => (
          <Message key={message.id} {...message} />
        ))}
        <Grid
          container
          item
          direction="row"
          justifyContent="space-between"
          mt={2}
        >
          <Grid item xs={11}>
            <TextField
              color="secondary"
              multiline
              placeholder="Enter message..."
              variant="outlined"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid container item xs={1} justifyContent="center">
            <IconButton color="secondary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
