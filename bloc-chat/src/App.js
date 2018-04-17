import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkg5MKQ3-VZyYIZh0kzCyAQgNtjjOAXxw",
  authDomain: "bloc-chat-react-ahutchings.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-ahutchings.firebaseio.com",
  projectId: "bloc-chat-react-ahutchings",
  storageBucket: "bloc-chat-react-ahutchings.appspot.com",
  messagingSenderId: "852322192246"
};

firebase.initializeApp(config);

class App extends Component {
constructor(props){
  super(props)

  this.state = { currentRoom: ''};
}

setCurrentRoom(room ) {
  this.setState({currentRoom: room})
  console.log(room )
}

  render() {

    const showMessages = this.state.currentRoom;

    return (
      <div className='App'>
        <header>
          <h1>Chat!</h1>
        </header>

        <aside>
          <RoomList firebase={firebase} currentRoom={this.setCurrentRoom.bind(this)}/>
        </aside>

        <main>
          <h1>{this.state.currentRoom.name}</h1>
          <div id="messagePlane">
            {showMessages ? (<MessageList firebase={firebase} currentRoom={this.state.currentRoom.key}/>) : (null) }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
