import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component
const Home = () => {

const [inputValue, setInputValue] = useState("")
const [todos, setTodos] = useState([])

  return (
    <div className="todo container d-flex justify-content-center">
		
      <ul className="flex-column">
	  <h3>My Todos</h3>
        <input type="text" onChange={(event)=> setInputValue(event.target.value)}
		value={inputValue} 
		onKeyPress={(e) => {
		if (e.key === "Enter") { setTodos(todos.concat(inputValue))
	    setInputValue("") 
	}
}}
		 placeholder="type text here"/>
        
        {todos.map((item, index) => (
		<li> <strong>{item}</strong>
		<button onClick={() =>
			setTodos(todos.filter((t, currentIndex)=> index != currentIndex))}>Borrar</button>
		</li>
		
		
		))} 
		
		<li><strong> {todos.length} </strong> Items</li>		
       
      </ul>  	  
    </div>
	
	
	
  );
};

export default Home;
