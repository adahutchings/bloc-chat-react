import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import UserInfo from './components/UserInfo';

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

  this.state = {
    currentRoom: '',
    user: null
  };
}

setCurrentRoom(room ) {
  this.setState({currentRoom: room})
  console.log(room )
}

setUser(user){
  this.setState({user: user})
  console.log(user);
}

  render() {

    const showMessages = this.state.currentRoom;
    const userName = this.state.user === null ? "Guest" : this.state.user.displayName;

    return (
      <div className='App'>
        <header>
          <h1>Chat!</h1>
          <h3>
            <UserInfo firebase = {firebase} setUser={this.setUser.bind(this)} userName={userName} />
          </h3>
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
