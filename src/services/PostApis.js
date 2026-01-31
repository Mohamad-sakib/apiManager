import { get, remove, put, post } from "./apiManager";

export const getPosts = async () => await get("/posts");

export const removePost = async (id) => await remove(`/posts${id}`);

export const addPost = async (postData) => await post("/posts", postData);

export const editPost = async (id, post) => await put(`/posts/${id}`, post);
