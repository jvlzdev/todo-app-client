import { useState } from "react";
import {
  RiCloseCircleFill,
  RiEditCircleFill,
  RiDeleteBin5Fill,
} from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getLoading, getPrompt, getTodoList } from "../features/todo/todoSlice";
import {
  deleteTodoAction,
  updateTodoAction,
} from "../features/todo/todoService";

function TodoList() {
  const todoList = useAppSelector(getTodoList);
  const [input, setInput] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const dispatch = useAppDispatch();

  const handleOnClickEdit = (data: any) => {
    setSelectedItem(data);
  };

  const requestCallBack = (res) => {
    if (res) {
      dispatch(getLoading(true));
      dispatch(getPrompt(res.message));
      setTimeout(() => {
        dispatch(getLoading(false));
      }, 3000);
    }
  };

  const handleOnClickUpdate = (_id: any) => {
    dispatch(
      updateTodoAction(
        _id,
        {
          data: input,
          done: false,
        },
        requestCallBack
      )
    );

    setSelectedItem("");
  };

  const handleonClickDelete = (_id: any) => {
    dispatch(deleteTodoAction(_id, requestCallBack));
  };

  const handleOnChangeInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.container}>
      {todoList.map((todo) => (
        <div className={styles.itemContainer} key={todo._id}>
          <div className={styles.itemTitle}>
            {selectedItem._id === todo._id ? (
              <input
                type="text"
                id="todo_name"
                className={styles.input}
                onChange={(e) => handleOnChangeInput(e)}
                value={input}
              />
            ) : (
              todo.data
            )}
          </div>
          <div className={styles.iconContainer}>
            {selectedItem._id === todo._id ? (
              <>
                <button
                  className={styles.buttonContainer}
                  onClick={() => setSelectedItem("")}
                >
                  <RiCloseCircleFill
                    className={styles.iconStyle}
                    color={"rgb(244 63 94)"}
                  />
                  <span>Close</span>
                </button>
                <button
                  className={styles.buttonContainer}
                  onClick={() => handleOnClickUpdate(todo._id)}
                >
                  <AiFillCheckCircle
                    className={styles.iconStyle}
                    color={"rgb(22 163 74)"}
                  />
                  <span>Update</span>
                </button>
              </>
            ) : (
              <>
                <button
                  className={styles.buttonContainer}
                  onClick={() => handleOnClickEdit(todo)}
                >
                  <RiEditCircleFill
                    className={styles.iconStyle}
                    color={"rgb(14 165 233)"}
                  />
                  <span>Edit</span>
                </button>
                <button
                  className={styles.buttonContainer}
                  onClick={() => handleonClickDelete(todo._id)}
                >
                  <RiDeleteBin5Fill
                    className={styles.iconStyle}
                    color={"rgb(244 63 94)"}
                  />
                  <span>Delete</span>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: "h-4/6 overflow-y-auto bg-white",
  itemContainer:
    "h-1/5 border-b-2 pr-5 pl-5 flex justify-between items-center gap-x-10 hover:bg-slate-200 font-semibold",
  iconStyle: "w-6 h-6",
  iconContainer: "flex gap-x-4 w-20",
  itemTitle: "text-sm w-full",
  input:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 h-8",
  buttonContainer: "text-[10px] flex flex-col justify-center items-center",
};

export default TodoList;
