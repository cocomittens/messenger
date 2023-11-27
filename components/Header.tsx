import React, { useContext } from "react";
import Contact from "./Contact";
import UserContext from "@/contexts/UserContext";

const Header = () => {
  const user = useContext(UserContext);
  return <Contact username={user.username} image={user.image} />;
};

export default Header;
