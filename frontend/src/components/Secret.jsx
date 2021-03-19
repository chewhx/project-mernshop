import React, { useEffect, useState } from "react";
import axios from "axios";

const Secret = () => {
  const [data, setData] = useState();

  useEffect(async () => {
    const userInfo = localStorage.getItem("userInfo");
    await axios
      .post("/api/v1/users/secret", JSON.parse(userInfo))
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => setData(err));
  }, []);
  return !data ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>Secret Screen</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Secret;
