import React from "react";

import "./App.css";

import Head from "./components/todo/Head";
import List from "./components/todo/List";
import Foot from "./components/todo/Foot";
class App extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todoObj) => {
    let { todos } = this.state;
    let newObj = [...todos, todoObj];
    this.setState({ todos: newObj });
    console.log("------todoObj=-", todoObj);
  };
  delTodo = (id) => {
    let { todos } = this.state;
    const newTodos = todos.filter((it) => {
      return it.id != id;
    });
    this.setState({ todos: newTodos });
    console.log("删除");
  };
  updateTodo = (id) => {};
  render() {
    let { todos } = this.state;

    return (
      <div className="APP">
        <h2>TODO</h2>
        <Head addTodo={this.addTodo}></Head>
        <List todos={todos} delTodo={this.delTodo} />
        <Foot todos={todos}></Foot>
      </div>
    );
  }
}
export default App;
