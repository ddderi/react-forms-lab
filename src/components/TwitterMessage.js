import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
         maxChars: 280,
         
    };
  }

  handleCharleft = (event) =>
  {
    
    this.setState({
      maxChars: this.state.maxChars - 1,
      messageT:  event.target.value
     
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageT} onChange={event => this.handleCharleft(event)} />
        <p>{this.state.maxChars}</p>
        <p>{this.state.messageT}</p>
      </div>
    );
  }
}



export default TwitterMessage;
