const { get, remove, put } = require("./apiManager");

const getPosts = () => {
  return get("/posts");
};

const removePost = (id) => {
  return remove(`/posts${id}`);
};

const addPost = (post) => {
  return remove("/posts", post);
};

const editPost = (id, post) => {
  return put(`/posts/${id}`, post);
};
