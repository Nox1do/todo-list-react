import React from "react";
import { useState } from "react";
//include images into your bundle

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  //Fetch Api here
  

  return (
    <div className="justify-content-center">
      <div className="todo container d-flex justify-content-center">
        <ul className="flex-column">
          <h3 className="text-center">My Todos</h3>
          <input
            type="text"
            required
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            onKeyPress={(enter) => {
              if (inputValue.trim() === "") {
                return;
              }
              if (enter.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="Type text here"
          />

          {todos.map((item, index) => (
            <li>
             <strong>{item}</strong>
              <button
                className="float-end"
                onClick={() =>
                  /*filter para funcion borrar al clickear*/
                  setTodos(
                    todos.filter((t, currentIndex) => index != currentIndex)
                  )
                }
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="todos text-center container d-flex justify-content-center">
        <p><strong> {todos.length} </strong>Items</p>  </div>
    </div>
  );
};

export default Home;
