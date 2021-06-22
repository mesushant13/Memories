import axios from 'axios'; //used for making api calls

const url='http://localhost:5500/posts';

export const fetchPosts=() =>  axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost =(id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);