import axios from "axios";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const [post1, setPost1] = useState({});
  const [id, setId] = useState(1);
  const [button, setButton] = useState(false);
  const [getPost, setGetPost] = useState(id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost1(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [getPost]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button
          onClick={() => {
            setGetPost(id);
          }}
        >
          Get Post
        </button>
      </div>
      <li>{post1.title}</li>

      <button onClick={() => setButton(!button)}>View all</button>
      <UL>
        {posts &&
          button &&
          posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </UL>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 50px;
  width: 100%;
  div{
    display: flex;
  }
  li {
    list-style-type: none;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const UL = styled.ul`
  margin-left: 50px;
  width: 100%;
  list-style-type: none;
`;

export default FetchData;
