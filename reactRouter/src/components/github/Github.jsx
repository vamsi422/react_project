//import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vamsi422")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-700 text-white">
      Github followers: {data.followers}
      <img
        className="p-4"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
};

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
