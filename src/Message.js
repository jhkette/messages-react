import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from "@material-ui/core";

import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showmessage: false,
      code: "",
      url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const encrypted = btoa(event.target.value);
    this.setState({ code: encrypted });
    this.setState({ url: `${window.location}#${encrypted}`})
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.url);
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <Card variant="outlined" className="card">
          <div className="spacing">
            <FormControl>
              <InputLabel htmlFor="my-input">Message</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={this.handleChange}
              />

              <div className="spacing1">
                <input
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
              </div>

              <FormHelperText id="my-helper-text">
                Enter your message
              </FormHelperText>
            </FormControl>
          </div>
        </Card>
        {/* {this.state.showmessage && */}
        <Card variant="outlined" className="card">
          <FormControl>
            <div className="spacing">
              <Input id="message" value={this.state.value} />
            </div>
          </FormControl>
        </Card>
        {/* } */}
      </div>
    );
  }
}

export default Message;
