import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { addTodo, deleteTodo } from '../actions';

import Header from '../components/Header';

class App extends React.Component {
  state = { addTodoText: '' }

  handleAddTodoText = (e) => {
    this.setState({ addTodoText: e.target.value });
  }

  handleAddTodo = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.addTodoText)

    this.setState({ addTodoText: '' })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <form onSubmit={this.handleAddTodo}>
          <input onChange={this.handleAddTodoText} value={this.state.addTodoText} />

          <button type={'submit'} >ADD</button>
        </form>

        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i}>
                <p>{todo}</p>

                <button onClick={() => this.props.deleteTodo(i)}>DELETE</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todoReducer }
}

const AppContainer = connect(mapStateToProps, { addTodo: addTodo, deleteTodo: deleteTodo })(App);

export default AppContainer;
