import React, { useContext } from "react";
import { Grid } from "@mui/material";
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
      {contacts.map((contact) => {
        return (
          <Contact
            username={contact.username}
            image={contact.image}
            center={true}
          />
        );
      })}
    </Grid>
  );
};

export default Contacts;
