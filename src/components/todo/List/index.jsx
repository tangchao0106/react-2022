import React, { PureComponent } from "react";
import Item from "./item";
export default class Index extends PureComponent {
  render() {
    let { todos, delTodo } = this.props;
    console.log("todos==", todos);
    return (
      <ul>
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} delTodo={delTodo}></Item>;
        })}
      </ul>
    );
  }
}
