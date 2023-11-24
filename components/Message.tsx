"use client";

import React, { useEffect, useState } from "react";
import { fetchMessages } from "@/services/messageService";
import { MessageType } from "@/types/Chat";

const Message = (props: MessageType) => {
  return <div>{props.text}</div>;
};

export default Message;
