import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, loading: false, post: action.payload, error: "" };

    case "ERROR":
      return { ...state, loading: false, error: "Something went wrong" };

    default:
      return state;
  }
};

const FetchData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      {data.loading ? "Loading" : data.post.title}
      {data.error ? data.error : null}
    </div>
  );
};

export default FetchData;
