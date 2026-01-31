import { useEffect, useState } from "react";
import { addPost, editPost as requestEditPost } from "../services/PostApis";
import { UNIVERSAL_ID } from "../constants/postConstants";

export function PostForm({ posts, setPosts, editPost, setEditPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newpost = {
      userId: 1,
      title,
      body,
      id: editPost ? editPost.id : Date.now(),
    };

    if (editPost) {
      requestEditPost(UNIVERSAL_ID, newpost).then(() => {
        setPosts((posts) => {
          return posts.map((post) => (post.id === newpost.id ? newpost : post));
        });
        setEditPost(null);
      });
    } else {
      addPost(newpost)
        .then(() => {
          setPosts([...posts, newpost]);
          clearForm();
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setBody(editPost.body);
    } else {
      clearForm();
    }
  }, [editPost]);

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
      <button type="submit">{editPost ? "EditPost" : "Add Post"}</button>
    </form>
  );
}
