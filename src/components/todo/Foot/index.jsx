import React, { Component } from "react";
import "./index.css";
export default class Foot extends Component {
  render() {
    let { todos } = this.props;
    return (
      <div className="foot">
        <p className="item">未完成 {todos.length}</p>
        <p className="item">已完成</p>
      </div>
    );
  }
}
