"use client";

import React, { useEffect, useState } from "react";
import { MessageType } from "@/types/Chat";
import { Typography, Grid } from "@mui/material";

const Message = (props: MessageType) => {
  return (
    <Grid container width="20vw">
      <Grid container item xs={12} justifyContent="space-between">
        <Typography color="#111">{props.user}</Typography>
        <Typography color="#111">
          {new Date(props.date).toTimeString().slice(0, 5)}
        </Typography>
      </Grid>
      <Grid item xs={12} bgcolor="#111" p={1} borderRadius={1}>
        <Typography>{props.message}</Typography>
      </Grid>
    </Grid>
  );
};

export default Message;
