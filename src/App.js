import React from 'react';
import './App.css';


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

function TodoForm({ addToDo, index }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(addToDo);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => addToDo(index)}>Add To List</button>
    </form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    { text: "Eat Breakfast", isCompleted: false },
    { text: "Go to the Gym", isCompleted: false },
    { text: "Watch South Park", isCompleted: false },
    { text: "Code on Computer", isCompleted: false },
    { text: "Eat Dinner", isCompleted: false },
    { text: "Sleep", isCompleted: false },

  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="to-do-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;



