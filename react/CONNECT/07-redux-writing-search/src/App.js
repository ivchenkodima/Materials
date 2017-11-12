import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.tracks,
    };
    this.addTrack = this.addTrack.bind(this);
    this.undo = this.undo.bind(this);
  }

  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  undo() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={() => this.addTrack()}>Add track</button>
        </div>
        <div>
          <input
            type="text"
            onChange={e => this.setState({ searchValue: e.target.value })}
          />
        </div>
        <ul>
          {
            this.props.tracks
              .filter(item =>
                new RegExp(this.state.searchValue).test(item.name))
              .map((track, index) => <li key={index}>{track.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks,
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = { id: Date.now().toString(), name };
      dispatch({ type: 'ADD_TRACK', payload });
    }
  })
)(App);
