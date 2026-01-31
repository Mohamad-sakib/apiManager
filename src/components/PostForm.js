import { useState } from "react";
import { addPost } from "../services/PostApis";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {};
  //addpost};
  return (
    <form>
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
      <button type="submit" onSubmit={handleSubmit}>
        Add Post
      </button>
    </form>
  );
}
