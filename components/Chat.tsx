"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages, createMessage } from "@/services/messageService";
import { MessageType } from "@/types/Chat";
import { TextField, Box, IconButton, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { fetchUserProfile } from "@/services/messageService";
import Header from "./Header";
import Message from "@/components/Message";
import Contacts from "@/components/Contacts";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({ username: "", image: "" });

  useEffect(() => {
    fetchUserProfile(3).then((user) => setUser(user));
  }, []);

  const getAndSetMessages = () =>
    fetchMessages().then((messages) => setMessages(messages.reverse()));

  const handleSend = () => {
    createMessage({
      message,
      sender: 4,
      recipient: 3,
      date: new Date(Date.now()),
    }).then((message) => {
      getAndSetMessages();
    });
  };

  useEffect(() => {
    getAndSetMessages();
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container>
        <Grid container item xs={3}>
          <Contacts contacts={[user]} />
        </Grid>
        <Grid container item xs={9}>
          <Header username={user.username} image={user.image} />

          <Grid
            container
            direction="column"
            width="60vw"
            height="80vh"
            justifyContent="flex-end"
            bgcolor="rgba(255, 255, 255, 0.5)"
            borderRadius={2}
            p={2}
            onKeyDown={(e) => {
              e.key === "Enter" && handleSend();
            }}
          >
            {messages.map((message: MessageType) => (
              <Message key={message.id} {...message} {...user} />
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
