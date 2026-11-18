/*import {createStore} from 'redux';

const increment=()=>({
type:"INCREMENT"
})

const counterReducer=(state={count:0},action)=>{
  switch(action.type){
    case"INCREMENT":
    return {count:state.count+1};

    default:
      return state;
  }
}
const store=createStore(counterReducer);
export default store;*/
// src/store.js
import { createStore } from "redux";

// Action
const increment = () => ({
  type: "INCREMENT",
});

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

export default store;
