const redux = require('redux');
const actionType = require('./actionTypes');

const initialState = { todos: [] }

const myReducer =(state=initialState, action) =>{
   newState = {...state};
  switch (action.type){
    case actionType.ADD_TODO:
      newTodos = state.todos.concat(action.text);
      newState.todos = newTodos;
      break;
    case actionType.REMOVE_TODO:
      newTodos = state.todos.slice();
      newTodos.splice(action.index,1);
      newState.todos = newTodos;
      break;
  }
   console.log(newState);
  return newState;
}

const store = redux.createStore(myReducer);

const addToDo = task => store.dispatch({type:actionType.ADD_TODO, text:task});
addToDo('Wash Car');
addToDo('Paint Garage');
store.dispatch({type:actionType.ADD_TODO, text:`clean garage`});
store.dispatch({type:actionType.REMOVE_TODO, index:0});

