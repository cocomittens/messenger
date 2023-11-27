import React, { useState, useEffect } from "react";
import { Grid, Typography, Avatar } from "@mui/material";

type User = {
  username: string;
  image: string;
};

const Header = ({ username, image }: User) => {
  return (
    <Grid container item width="60vw" alignItems="center" p={1}>
      <Grid item>
        <Avatar src={image} />
      </Grid>
      <Grid item px={1}>
        <Typography color="#111">{username}</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
