import "./App.css";
import React, { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostChangeService from "./API/PostChangeService";
import PostFilter from "./components/PostFilter/PostFilter";
import { usePosts } from "./hooks/usePosts";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Погулять", body: "С собакой", status: false, like: false },
    { id: 2, title: "Ужин", body: "В гостях 18:00", status: true, like: true },
    {
      id: 3,
      title: "аУчеба",
      body: "Универ с пн-пт",
      status: true,
      like: false,
    },
    { id: 4, title: "Фронтенд", body: "аll-time", status: false, like: true },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [filterBtn, setFilterBtn] = useState(sortedAndSearchedPosts);
  const [status, setStatus] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changeStatus = (post) => {
    const newPosts = PostChangeService.changeStatus(posts, post);
    setPosts(newPosts);
  };

  const changeLike = (post) => {
    const newPosts = PostChangeService.changeLike(posts, post);
    setPosts(newPosts);
  };

  useEffect(() => {
    setFilterBtn(sortedAndSearchedPosts);
  }, [sortedAndSearchedPosts]);

  const selectFilter = (status) => {
    if (status === "Checked") {
      const newArray = [
        ...sortedAndSearchedPosts.filter((p) => p.status === true),
      ];
      setFilterBtn(newArray);
    } else if (status === "Unchecked") {
      const newArray = [
        ...sortedAndSearchedPosts.filter((p) => p.status === false),
      ];
      setFilterBtn(newArray);
    } else if (status === "All") {
      setFilterBtn(sortedAndSearchedPosts);
    } else if (status === "Liked") {
      const newArray = [
        ...sortedAndSearchedPosts.filter((p) => p.like === true),
      ];
      setFilterBtn(newArray);
    }
  };

  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <Button onClick={() => setModal(true)} cl="btn_create">
        Create Post
      </Button>
      <PostFilter filter={filter} setFilter={setFilter} />
      <ButtonGroup
        status={status}
        setStatus={setStatus}
        selectFilter={selectFilter}
      />
      <PostList
        changeLike={changeLike}
        changeStatus={changeStatus}
        remove={removePost}
        posts={filterBtn}
      />
    </div>
  );
}

export default App;
