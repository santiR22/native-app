import axios from "axios";
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LOGIN,
  LOGIN_USER,
} from "@env";

export const getPostsRequests = async () =>
  await axios.get(GET_POSTS);

export const getPostRequest = async (id) =>
  await axios.get(GET_POST + id);

export const deletePostRequest = async (id) =>
  await axios.delete(DELETE_POST + id);

export const createPostRequests = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post(CREATE_POST, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData();

  for (let key in newPostFields) {
    form.append(key, newPostFields[key]);
  }
  return await axios.put(UPDATE_POST + id, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
