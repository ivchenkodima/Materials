import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
  }

    addTrackRemove(e) {
    //console.log(e.target.parentElement.firstChild.nextSibling.nodeValue);
    this.props.onAddTrackRemove(e.target.parentElement.firstChild.nextSibling.nodeValue);
  }


  componentWillMount() {
    this.props.getTableDate;
  }
  render() {
    console.log(this.props.data);
    // const { data } = this.props;
    return (
      <div>
        <input type="text" ref={(input) => {this.trackInput = input }}/>
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {
            this.props.data.map(item => (
              <li>{item}<button onClick={this.addTrackRemove.bind(this)}>remove</button></li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default connect(
  state => ({
    data: state,
    tableData: state.table,
  }),
  dispatch => ({
    onAddTrack: trackName => dispatch({
        type: 'ADD_TRACK',
        payload: trackName,
    }),
    onAddTrackRemove: trackName => dispatch({
        type: 'REMOVE_TRACK',
        payload: trackName,
    }),
  })
)(App);



