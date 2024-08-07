import React, { memo } from "react";
import { MessageType } from "@/types/Chat";
import { Typography, Grid } from "@mui/material";

const Message = (props: MessageType) => {
  const isCurrentUser = props.recipient === 4;
  return (
    <Grid
      container
      item
      width="40%"
      alignSelf={isCurrentUser ? "flex-start" : "flex-end"}
    >
      <Grid container item justifyContent="space-between">
        <Typography color="#111">{isCurrentUser && props.username}</Typography>
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

export default memo(Message);
