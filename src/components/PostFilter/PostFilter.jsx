import React from "react";
import styles from "./PostFilter.module.scss";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        cl="input_form"
        placeholder="Фильтрация постов...."
      />
      <Select
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
