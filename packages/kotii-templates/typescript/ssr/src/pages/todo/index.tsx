// @ts-nocheck
import { Head } from "kotii-scripts";
import React from "react";
import "../../styles/color.global.scss";
import "../../styles/color.styl";
import styles from "./todo.module.less";

const Todo = () => {
  console.log("THE STYLES", styles);
  return (
    <div>
      <Head title={"Todo page kotii"} />
      <p className="yellow">Im tHe TODO Page</p>;
      <p className={styles["scoped-text"]}>Im styled by scoped classes</p>
      <p className={styles["scoped-text-two"]}>Im styled by scoped 2</p>
      <p className={styles["scoped-text-three"]}>Im styled by scoped 3</p>
      <p className={styles["scoped-text-four"]}>Im styled by scoped 4</p>
      <p className="blue">Im styled by scoped 4</p>
    </div>
  );
};

export default Todo;
