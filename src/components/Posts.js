import { useEffect, useState } from "react";
import { Post } from "./Post";
import { getPosts, removePost } from "../services/PostApis";
import { PostForm } from "./PostForm";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    removePost(id)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editPost={editPost}
        setEditPost={setEditPost}
      />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleDelete={handleDelete}
          setEditPost={setEditPost}
        />
      ))}
    </div>
  );
}
