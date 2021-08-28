import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>
        A ToDo w/ old react
      </h1>
        <Todo />
    </div>
  );
}

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todos: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.delTodo = this.delTodo.bind(this)
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ ...this.state.todos, value: e.target.value })}
        />
        <button onClick={this.handleClick}>add</button>
        {this.state.todos.map( (todo,i) => <h4 key={i} onClick={this.delTodo}>{todo}</h4>)}
      </div>
    );
  }

  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    });
  }

  delTodo(e) {
    this.setState({
      todos: this.state.todos.filter( (el) => el != e.target.innerText),
      value: this.state.value
    })
  }
}
