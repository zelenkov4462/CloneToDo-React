import React from "react";
import styles from "./PostList.module.scss";
import PostItem from "../PostItem/PostItem";

const PostList = ({ remove, posts, changeStatus, changeLike }) => {
  return posts.length ? (
    <div>
      <h1 style={{ textAlign: "center", color: "brown" }}>Список постов</h1>
      {posts.map((post, index) => (
        <PostItem
          changeLike={changeLike}
          changeStatus={changeStatus}
          remove={remove}
          key={post.id}
          post={post}
          number={index + 1}
        />
      ))}
    </div>
  ) : (
    <h1 style={{ textAlign: "center", color: "brown" }}>Посты отсутствуют</h1>
  );
};

export default PostList;
