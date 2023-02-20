import axios from 'axios';

const url = 'http://localhost:5000/posts';

//CREATE API CALLS HERE AND EXPORT THEM, YOU'LL LATER USE THEM IN THE ACTIONS

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);