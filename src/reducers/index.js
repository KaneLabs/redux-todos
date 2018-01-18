import { combineReducers } from 'redux'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const nextStateWithNewTodo = state.concat([action.payload])

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

// doesnt do anything yet
const filterReducer = (state = 'INITIAL_STATE', action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const reducers = combineReducers({
  todoReducer,
  filterReducer,
})

export default reducers
