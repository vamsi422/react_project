import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  const text = user ? `you are login ${user.name}` : `"please login"`;
  return <div className="text-center p-1">{text} </div>;
};

export default Profile;
