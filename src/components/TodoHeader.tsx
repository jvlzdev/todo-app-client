function TodoHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MY TODO LIST</h1>
    </div>
  );
}

const styles = {
  container: "h-1/6 flex flex-col justify-center items-center w-full border-b-4",
  title: "text-lg	font-bold",
};

export default TodoHeader;
