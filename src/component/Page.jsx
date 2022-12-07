import React from "react";
import Home from "./Home";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&apiKey=c4be4f8bfa8944adb8ec8f4a3a46cb83"
      );

      setTodos(r.data.articles);
    };
    getTodo();
  }, []);

  return (
    <div>
      <Home todos={todos} />
    </div>
  );
};

export default Page;
