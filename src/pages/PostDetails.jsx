import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
        );
        setPost(response.data);
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
      <Link to="/posts" className="text-blue-400 inline-block mb-4">
        All posts
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <article key={post?.id} className="prose">
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;
