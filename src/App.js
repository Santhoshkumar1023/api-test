import React, { useEffect } from "react";
import { getRequest, postRequest } from "./http-helper";

const App = () => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, status, error } = await getRequest({
        url: "",
        Auth: true,
        headers: header,
      });
      if (status === 200) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    let payload = {};
    try {
      const { data, status, error } = await postRequest({
        url: "",
        Auth: true,
        headers: header,
        data: payload,
      });
      if (status === 200) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <button onClick={() => postData()}>Post</button>
    </div>
  );
};

export default App;
