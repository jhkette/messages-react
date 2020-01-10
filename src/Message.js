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

    state = {
      showmessage: false
    }
    
    render() {

   
    return (
        <div>
            <Card variant="outlined" className="card">
            <div className="spacing">
                <FormControl>
                   
                    <InputLabel htmlFor="my-input">Email address
                    </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    
                    <div className="spacing1">
                    <Button 
                  
                    variant="contained" 
                    color="primary" 
                    className="mainbutton"
                   >
                    Primary
                    </Button>
                    </div>
                   
                
                    <FormHelperText id="my-helper-text">
                    Enter your message
                    </FormHelperText>
                    
                </FormControl>
                </div>
            </Card>
            {this.state.showmessage &&
            <Card variant="outlined" className="card">
                <FormControl>
                    <div className="spacing">
                    <Input id="message" />
                    </div>
                </FormControl>
            </Card>
            }
        </div>
    )
  }
}

export default Message;