import axios from "axios";
import { BASE_URL } from "../../app/url";
import { getTodo } from "./todoSlice";

export const getAllTodoAction = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + "/todos");
    const isSuccess = res.status === 200;
    if (isSuccess) {
      dispatch(getTodo(res.data || []));
    }
  } catch (err) {
    console.log(err);
  }
};

export const addTodoAction = (bodyData, callback) => async (dispatch) => {
  try {
    const res = await axios.post(BASE_URL + "/todos", bodyData);
    const isSuccess = res.status === 200;
    if (isSuccess) {
      callback &&
        callback({ message: "Todo Item has been added successfully!" });
      dispatch(getAllTodoAction());
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateTodoAction =
  (id, bodyData, callback) => async (dispatch) => {
    try {
      const res = await axios.put(BASE_URL + `/todos/${id}`, bodyData);
      const isSuccess = res.status === 200;
      if (isSuccess) {
        callback &&
          callback({ message: "Todo Item has been updated successfully!" });
        dispatch(getAllTodoAction());
      }
    } catch (err) {
      console.log(err);
    }
  };

export const deleteTodoAction = (id, callback) => async (dispatch) => {
  try {
    const res = await axios.delete(BASE_URL + `/todos/${id}`);
    const isSuccess = res.status === 200;
    if (isSuccess) {
      callback &&
        callback({ message: "Delete Item has been deleted successfully!" });
      dispatch(getAllTodoAction());
    }
  } catch (err) {
    console.log(err);
  }
};
