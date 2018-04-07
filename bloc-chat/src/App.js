import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className='App'>
        <header>
          <h1>Chat!</h1>
          <nav>{/* NAV BAR WILL GO HERE */} </nav>
        </header>

        <main>
          <RoomList firebase = {firebase} />
        </main>

      </div>
    );
  }
}

export default App;
