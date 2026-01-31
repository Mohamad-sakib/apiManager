import { useEffect, useState } from "react";
import { Post } from "./Post";
import { getPosts } from "../services/PostApis";

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
