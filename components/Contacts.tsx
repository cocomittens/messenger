import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import Contact from "./Contact";
import UserContext from "@/contexts/UserContext";

const Contacts = () => {
  const user = useContext(UserContext);
  const contacts = [user];
  return (
    <Grid
      container
      item
      width="20vw"
      alignItems="center"
      direction="column"
      p={1}
    >
      {contacts.map((contact, i) => {
        return (
          <Box
            bgcolor="rgba(255, 255, 255, 0.5)"
            width="100%"
            borderRadius={2}
            border="1px #111 solid"
          >
            <Contact
              key={i}
              username={contact.username}
              image={contact.image}
            />
          </Box>
        );
      })}
    </Grid>
  );
};

export default Contacts;
