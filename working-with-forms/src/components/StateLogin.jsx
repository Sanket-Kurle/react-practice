import { useState } from "react";
import { Input } from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/Input.js";

export default function Login() {
  const{
    value:emailValue,
    handleInputBlur:handleEmailBlur,
    handleInputChange:handleEmailChange,
    hasError:hasEmailError
  } =useInput('',(value)=>isEmail(value) && isNotEmpty(value));

  const{
    value:passwordValue,
    handleInputBlur:handlePasswordBlur,
    handleInputChange:handlePasswordChange,
    hasError:hasPasswordError
  }=useInput('',(value)=> !hasMinLength(value,6) && isNotEmpty(value))


  function handleSubmit(event) {
    event.preventDefault();
    if (hasEmailError || hasPasswordError) {
      return;
    }
    console.log(enteredValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          lable="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={hasEmailError && "Please Enter Valid Email"}
        />

        <Input
          lable="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={hasPasswordError && "Please Enter Valid Password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
