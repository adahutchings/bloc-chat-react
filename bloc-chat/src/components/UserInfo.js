import React, { Component } from 'react';


class UserInfo extends Component {
  constructor(props){
  super(props);

    this.userSignIn.bind(this);
    this.userSignOut.bind(this);

    }


  userSignIn(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
      console.log("sign in succesful");
      const user = result.user;
      this.props.setUser(user);
    });
  }

  userSignOut(){
    this.props.firebase.auth().signOut().then((result) => {
      console.log("sign out successful");
      this.props.setUser(null);
    });
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    })
  }

  render () {
    return (

      <section>
        <div id="user-name">{this.props.userName}</div>

        {this.props.userName === 'Guest' ?
            <button id="sign-in" onClick={() => this.userSignIn()}>Sign In</button>
          :
            <button id="sign-out" onClick={() => this.userSignOut()}>Sign Out</button>
          }
      </section>

    );
  }

}

export default UserInfo;
