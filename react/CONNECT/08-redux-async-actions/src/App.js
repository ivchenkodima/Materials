import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTracks, onAddTrack, onFindTrack  } from './actions/tracks';

class App extends Component {
  render() {
    const { onFindTrack, onAddTrack, getTracks } = this.props;
    return (
      <div>
        <div>
          <input type="text"
                 ref={input => this.trackInput = input}
          />
          <button
            onClick={() =>
              onAddTrack(this.trackInput.value)}>
            Add track
          </button>
        </div>
        <div>
          <input type="text"
                 ref={ input => this.searchInput = input}
          />
          <button onClick={() =>
            onFindTrack(this.searchInput.value)}
          >
            Find track
          </button>
        </div>
        <div>
          <button onClick={() => getTracks()}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks))
  }),
  { getTracks, onAddTrack, onFindTrack }
)(App);
