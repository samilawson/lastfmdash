import React from "react";

import ErrorMessage from "../components/ErrorMessage";
import User from "../components/user"
//add recent tracks
const HomePage = () => (
  <div>
    <User />
    <ErrorMessage />
  </div>
);

export default HomePage;
