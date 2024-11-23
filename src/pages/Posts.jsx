import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="grid gap-4">
          {posts?.map((post) => (
            <Link
              to={`/posts/${post?.id}`}
              key={post?.id}
              className="bg-white p-4 border rounded-2xl"
            >
              <h2 className="mt-0">{post?.title}</h2>
              <p>{post?.body}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
