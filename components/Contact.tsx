import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { User } from "@/types/User";

const Contact = ({ username, image, center }: User) => {
  return (
    <Grid
      container
      item
      justifyContent={center ? "center" : "flex-start"}
      alignItems="center"
      p={1}
    >
      <Grid item>
        <Avatar src={image} />
      </Grid>
      <Grid item px={1}>
        <Typography color="#111">{username}</Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;