import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Posts from "./pages/Posts.jsx";
import Layout from "./components/Layout.jsx";
import PostDetails from "./pages/PostDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
