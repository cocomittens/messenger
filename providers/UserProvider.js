"use client";
import React, { useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { fetchUserProfile } from "@/services/messageService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", image: "" });

  useEffect(() => {
    fetchUserProfile(3).then(setUser);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
