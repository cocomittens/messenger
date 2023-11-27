import React, { useState, useEffect } from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { fetchUserProfile } from "@/services/messageService";

const Header = () => {
  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    fetchUserProfile(3).then((user) => setUser(user));
  }, []);

  return (
    <Grid container item width="60vw" alignItems="center" p={1}>
      <Grid item>
        <Avatar src="https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg" />
      </Grid>
      <Grid item px={1}>
        <Typography color="#111">{user.username}</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
