export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: text
  }
}

export function deleteTodo(i) {
  return {
    type: 'DELETE_TODO',
    payload: i,
  }
}
