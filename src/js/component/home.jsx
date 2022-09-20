import React, { useEffect } from "react";
import { useState } from "react";
//include images into your bundle

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const emptyArray = []

  //GET
  const getTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Noeg")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };
  //PUT
  const putTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Noeg", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos), //cadena de texto
    })
      
      .then((response) => response.text())
      .then((data) => console.timeLog(data));
  };

  //POST
  const postTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Noeg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{
        "label": "pedro",
        "done": false
        },]) 
    })
      .then((response) => response.json())
      .then((data) => console.timeLog(data));
  };


  //DELETE
  const deleteTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Noeg", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos) 
    })
      .then((response) => response.json())
      .then((data) => setTodos([]));
    
   
  };
 

  //useEffect here
  useEffect(() => {
    getTodos();
  }, []);

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
                setTodos([
                  { label: enter.target.value, done: false },
                  ...todos,]);
                setInputValue("");
              }
            }}
            placeholder="Type text here"
          />
          <ul>
            {todos.map((item, index) => {
              return (
                <li key={index}>
                  <strong>{item.label}</strong>
                  {putTodos()}
                  <button
                    className="float-end"
                    /*filter para funcion borrar al clickear*/
                    onClick={() =>
                      setTodos(
                        todos.filter((t, currentIndex) => index != currentIndex)
                      )

                    }
                  >
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
      <div className="todos text-center container d-flex justify-content-center">
        <div>
          <p>
            <button onClick={deleteTodos} className="borrar">Borrar lista</button>
          </p>
        </div>
        <p>
          <strong> {todos.length} </strong>Items
        </p>
      </div>
    </div>
  );
};

export default Home;
