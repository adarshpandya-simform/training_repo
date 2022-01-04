import "./Display.css";

const Display = ({ todos, deleteTodo }) => {
  const handleDeleteButton = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="main-todo-container">
      {todos.map(({ id, title }) => (
        <div key={id} className="main-todo">
          <span>{title}</span>
          <button
            onClick={() => {
              handleDeleteButton(id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Display;
