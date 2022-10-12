import React from "react";
import { nanoid } from "nanoid";
export default class Index extends React.Component {
  handleOnkeyUp = (envet) => {
    let { keyCode, target } = envet;
    if (keyCode != 13) return;
    if (target.value.trim() === "") return;
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    target.value = "";
  };
  todo = () => {};
  handleClick = (envet) => {
    console.log("-----handleClick-", envet);
    this.todo();
  };
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleOnkeyUp}></input>
        <button onClick={this.handleClick} className="ml-8">
          添加
        </button>
      </div>
    );
  }
}
