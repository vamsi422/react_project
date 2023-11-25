import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
    console.log(user);
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="text-center">login</h1>
      <div className="flex flex-col  p-2 items-center border-2 border-neutral-700">
        <input
          className="border-2 border-neutral-700 w-48 mt-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="username"
          placeholder="enter your user name"
        />
        <input
          className="border-2 border-neutral-700 mt-2 w-48"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="enter your password"
        />
        <button
          type="submit"
          className="border-2 border-neutral-700 rounded-md p-1 m-2 "
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Login;
