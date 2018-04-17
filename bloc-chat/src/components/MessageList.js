
import React, { Component } from 'react';



class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
        username:"" ,
        content: "",
        sentAt: "",
        roomId: "",
      };

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat( message ) });
    });
  }






  render() {
    const currentRoom = this.props.currentRoom;
    const messageList = this.state.messages

    .filter(message => message.roomId === currentRoom)
    .map(message => {
      return <div className='thisMessage' key={message.key}>{message.content + " Sent At:" + message.sentAt}</div>
    })

    return (
      <div className='chatMessages'>
        <div>{messageList}</div>

      </div>

    );
  }

}

export default MessageList;
