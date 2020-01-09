import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from "@material-ui/core";


import "./Message.css";


class Message extends Component {
   


  render() {
   
    return (
      <div>
      <Card variant="outlined" className="card">
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <Button className="ml-5 ml-lg-0"
            variant="contained" color="primary" className="mainbutton">
              Primary
            </Button>
            
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          </Card>
          <Card variant="outlined" className="card">
          <FormControl>
            <Input id="message" />
          </FormControl>
        </Card>
        
      </div>
    )
  }
}

export default Message;