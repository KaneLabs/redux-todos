import { combineReducers } from 'redux'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const nextStateWithNewTodo = state.concat([action.payload])

      console.log('nextState: ', nextStateWithNewTodo);

      return nextStateWithNewTodo;
    case 'DELETE_TODO':
    
        const nextStateWithoutTodo = state.filter((todo, i) => {
          if (i === action.payload) return false;

          return true;
        })

        return nextStateWithoutTodo;
    default:
      return state;
  }
}

const filterReducer = (state = 'ALLOW_ALL', action) => {
  switch (action.type) {
    case 'RESOLVED':
    default:
      return state;
  }
}

const reducers = combineReducers({
  todoReducer,
  filterReducer,
})

export default reducers
