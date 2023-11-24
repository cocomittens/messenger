"use client";

import React, { useEffect, useState } from "react";
import { MessageType } from "@/types/Chat";
import { Typography } from "@mui/material";

const Message = (props: MessageType) => {
  return (
    <div>
      <Typography>{props.user}</Typography>
      <Typography>{props.date.toString()}</Typography>
      <Typography>{props.message}</Typography>
    </div>
  );
};

export default Message;
