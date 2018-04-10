import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: " "
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }


  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat( room ) });
    });
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newRoomName) {return}
    const newRoomList = {name: this.state.newRoomName};
    this.setState({ rooms: [...this.state.rooms, newRoomList] });
  }

  createRoom() {
    this.roomsRef.push({
        name: this.state.newRoomName
});
  }

  render () {

    return (
      <section>

        <div id='roomList'>
          <ul>
            {this.state.rooms.map( (room, index) => {
              return (
                <li key={index}> {room.name}</li>
              )
            })}
          </ul>
        </div>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' value={this.state.newRoom} onChange={(e) => this.handleChange(e)} />
          <input type= 'submit' onClick={ this.createRoom() } />
        </form>

      </section>
    );
  }
}

export default RoomList;
