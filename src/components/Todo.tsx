import React from "react";
import { useAppSelector } from "../app/hooks";
import { showLoading, showPrompt } from "../features/todo/todoSlice";
import TodoAction from "./TodoAction";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoNotification from "./TodoNotification";

function Todo() {
  const isLoading = useAppSelector(showLoading);
  const promptMessage = useAppSelector(showPrompt);
  return (
    <div className={styles.container}>
      {isLoading ? <TodoNotification message={promptMessage} /> : ""}
      <div className={styles.todoContainer}>
        <TodoHeader />
        <TodoList />
        <TodoAction />
      </div>
    </div>
  );
}

const styles = {
  container: "bg-white w-4/12 m shadow-md h-96",
  todoContainer: "h-full",
};

export default Todo;
