import { useState } from "react";
import { v4 } from "uuid";
import "./Input.css";

const Input = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (todo !== "") {
      addTodo({ id: v4(), title: todo });
      setTodo("");
    } else {
      alert("please enter something");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
        type="text"
        placeholder="enter todo"
      />
      <button onClick={handleSubmit}>add todo</button>
    </div>
  );
};

export default Input;
