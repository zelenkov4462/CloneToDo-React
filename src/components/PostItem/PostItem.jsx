import React, { useState } from "react";
import styles from "./PostItem.module.scss";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const PostItem = ({ post, number, remove, changeStatus, changeLike }) => {
  return (
    <div className={styles.postItem__content}>
      <div>
        <h1>
          {number}. {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
      <div className={styles.postItem__btns}>
        <Input
          value={post.like}
          checked={post.like}
          onChange={() => changeLike(post)}
          cl="input_like"
          type="checkbox"
        />
        <span>Like</span>
        <Input
          checked={post.status}
          value={post.status}
          onChange={() => changeStatus(post)}
          cl="input_check"
          type="checkbox"
        />
        <span>Check</span>
        <Button onClick={() => remove(post)} cl="btn_delete">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
