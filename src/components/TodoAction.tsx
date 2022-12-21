import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodoAction } from "../features/todo/todoService";
import { getLoading, getPrompt } from "../features/todo/todoSlice";

function TodoAction() {
  const [todoName, setTodoName] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleOnChangeTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setTodoName(targetValue);
  };

  const requestCallBack = (res: { message: string }) => {
    if (res) {
      dispatch(getLoading(true));
      dispatch(getPrompt(res.message));
      setTimeout(() => {
        dispatch(getLoading(false));
      }, 3000);
    }
  };

  const handleOnclickAdd = () => {
    dispatch(
      addTodoAction(
        {
          data: todoName,
          done: false,
        },
        requestCallBack
      )
    );

    setTodoName("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="todo_name"
        className={styles.input}
        placeholder="Enter Item"
        onChange={handleOnChangeTodoName}
        value={todoName}
      />
      <button
        type="button"
        className={styles.button}
        onClick={handleOnclickAdd}
      >
        Submit
      </button>
    </div>
  );
}

const styles = {
  container:
    "h-1/6 flex w-full bg-white justify-center items-center gap-x-2 pl-5 pr-7",
  button:
    "text-gray-900 bg-white font-semibold border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-md text-sm px-5 py-2.5",
  input:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5",
};

export default TodoAction;
