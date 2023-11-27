import React from "react";
import { Grid } from "@mui/material";
import Contact from "./Contact";
import { User } from "@/types/User";

const Contacts = ({ contacts }: { contacts: User[] }) => {
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
