import React from "react";
import Input from "./Input";
function Form(props) {
  if (props.type === "login") {
    return (
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit"> Login </button>
      </form>
    );
  } else {
    return (
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button type="submit"> Login </button>
      </form>
    );
  }
}

export default Form;
