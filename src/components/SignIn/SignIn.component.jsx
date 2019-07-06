import React from "react";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit"> Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
