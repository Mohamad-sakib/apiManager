import { useEffect, useState } from "react";
import { Post } from "./Post";
import { getPosts } from "../services/PostApis";
import { PostForm } from "./PostForm";

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <PostForm posts={posts} setPosts={setPosts} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
