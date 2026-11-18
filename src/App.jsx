/*import React from 'react'

function App(){
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
export default App;*/

/*import React from 'react'

const name="Vaishnavi"
function App(){
  return(
    <div>
<h1>Hello! {name}</h1>
    </div>
  )
}

export default App;*/



/*
function App(){
  return(
    <div>
      <h1>Hello World!!</h1>
      <Greetings/>
    </div>
  )
}
export default App;*/

/*
import React from 'react';
import Greetings from './components/Greetings'
function App({name}){
  return (
    <div>
      <h1>Hello guyyz! {name}</h1>
    </div>
  )
}
export default App;*/



/* import React ,{useState} from 'react';


function App(){
  const [count,setCount]=useState(0);
  const increment=()=>setCount(count+1);


  const decrement=()=>setCount(count-1);
  return(
   <div> <h1>
   Hello everyone!
       </h1>
       <p>Current count:{count}</p>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       </div>
    
  )
}
export default App;
*/

/*import React from 'react';

function App(){
  const name="React";
  return <h1>Hello! {name}</h1>
}
export default App;*/

/*
import React from 'react';
import Greetings from './components/Greetings';

function App(){
  return <Greetings name="React developer"></Greetings>
}
export default App;
*/

/*import React ,{useState} from 'react';

function App(){
  const[count ,setCount]=useState(0);

  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  return(
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
export default App;*/


//Fetching APIs:--

/*
import React ,{useState,useEffect} from 'react';
function App(){
  const[data,setData]=useState(null);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>(response.json()))
    .then((data)=>setData(data));
  },[]);

  return(
    <div>
      <h1>
        Fetched data:
      </h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}
export default App;*/


//use of useContext:-
/*
import React , {useState,useContext,createContext}  from 'react';

//1.create context:-
const todoContext=createContext();

//2.providing the value:--

export const usetodos=()=>useContext(todoContext);

//3.create a provider component:--

export const todoProvider=()=>({children})=>{
  const [todos,setTodos]=useState([]);

  //function to add a todo:-

  const addTodo=(text)=>{
    const newTodo={id:Date.now(),text,completed:false};
    setTodos=([...todos,newTodo]);
  };

  const removeTodo=(id)=>{
  setTodos(todos.filter(todo=>todo.id!=id));
  }

  const toggleTodo=()=>{
setTodos(todos.map(todo=>todo.id==id ? {...todo,completed : !todo.completed}:todo))
  }
}
return(
  <TodoContext.Provider value={{todos, addTodo, removeTodo, toggleTodo}}>{children}</TodoContext.Provider>
)
*/
// src/TodoContext.js
// src/App.js
/*import React from 'react';
import { ToDoProvider } from './components/ToDoContext';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import ErrorBoundary from './components/ErrorBoundary';
const App = () => {
  return (
    <ToDoProvider>
      <div className="App">
        <h1>My To-Do List</h1>
        <ToDoInput />
        <ToDoList />
        
      </div>
      
    </ToDoProvider>
    
  )
};

export default App;
*/
/*
import React from 'react';
import { ToDoProvider } from './components/ToDoContext'; // Assuming the path is correct
import TodoInput from './components/ToDoInput';
import TodoList from './components/ToDoList';
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component

function App() {
  return (
    <ErrorBoundary>  
      <ToDoProvider>
        <div className="App">
          <h1>My To-Do List</h1>
          <TodoInput />
          <TodoList />
        </div>
      </ToDoProvider>
    </ErrorBoundary>
  );
}

export default App;*/

//Forms in React:--
/*
import React ,{useState} from 'react';

function form(){
  const [name,setName]=useState('');
  const[email,setEmail]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({name,email});
  };

  return(
    <form onSubmit={handleSubmit}>
<input
type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Name"/>
<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"/>

<button type="submit">Submit</button>


    </form>
  )

}
export default form;
*/


//React-Router:-

/*
import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

const Home=()=> <h1>Home Page</h1>
const About=()=> <h1>About Page</h1>
const Contact=()=> <h1>Contact Page</h1>

function App(){
  return(
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </nav>

      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App;
*/


/*

*/
/*
import React from 'react';

import {useSelector,useDispatch} from 'react-redux';

import {increment} from './store';

function App(){
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch(increment)}>Increment</button>
        </div>
    )
}
export default App;*/
// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
