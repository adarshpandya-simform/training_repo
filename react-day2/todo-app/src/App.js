import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setTodos([
      { id: "1", title: "todo1" },
      { id: "2", title: "todo2" },
      { id: "3", title: "todo3" },
    ]);
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="todo-container">
        <Input addTodo={addTodo} />
        <Display deleteTodo={deleteTodo} todos={todos} />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default App;
