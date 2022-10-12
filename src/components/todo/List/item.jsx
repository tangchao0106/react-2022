import React, { Component } from "react";

export default class Item extends Component {
  state = { mouse: false };
  handleDel = (id) => {
    return (enent) => {
      this.props.delTodo(id);
    };
  };
  handMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  render() {
    let { name, id } = this.props;
    let { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white", width: "200px" }}
        onMouseEnter={this.handMouse(true)}
        onMouseLeave={this.handMouse(false)}
      >
        <label>
          <input type="checkbox" name="" id="" />
          <span>{name}</span>
        </label>
        <button className="ml-90" onClick={this.handleDel(id)}>
          删除
        </button>
      </li>
    );
  }
}
