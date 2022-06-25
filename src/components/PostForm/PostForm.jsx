import React, { useState } from "react";
import styles from "./PostForm.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
      status: false,
      like: false,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        cl="input_form"
        type="text"
        placeholder="Название поста"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        cl="input_form"
        type="text"
        placeholder="Описание поста"
      />
      <Button onClick={addNewPost} cl="btn_create">
        CreatePost
      </Button>
    </form>
  );
};

export default PostForm;
