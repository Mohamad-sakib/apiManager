import { useState } from "react";
import { addPost } from "../services/PostApis";

export function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    addPost(post)
      .then((res) => {
        setPosts([...posts, res]);
        clearForm();
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Title</h1>
        <input
          type="text"
          className="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <h1>body</h1>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}
