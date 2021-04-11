import React, { useState } from 'react';

import './App.css';


const App = () =>{

  const [inputList,setInputList] = useState("buy Apple");

  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };

  return (
    <>
       <div className="main_div">
         <div>
             <br/>
             <h1>ToDo List</h1>
             <br/>
             <input type="text" placeholder="Add a Items" onChange={itemEvent}/>
             <button> + </button>

             <ol>
               <li>{inputList}</li>
             </ol>
         </div>
       </div>
    </>
  );

};


export default App;
