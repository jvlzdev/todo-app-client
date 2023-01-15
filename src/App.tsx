import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { getAllTodoAction } from "./features/todo/todoService";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTodoAction());
  }, []);
  return (
    <div className={styles.container}>
      <Todo />
      <Footer />
    </div>
  );
};

const styles = {
  container:
    "font-poppins min-h-screen w-full bg-slate-50 flex flex-col justify-center items-center gap-y-5",
};

export default App;
