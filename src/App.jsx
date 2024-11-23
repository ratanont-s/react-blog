import { Link } from "react-router";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <Link to="/posts" className="text-blue-400">
        All post
      </Link>
    </>
  );
};

export default App;
