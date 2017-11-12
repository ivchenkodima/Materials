import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Main extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
  }

  state = {
    isOpened: false,
  };

  render() {

    return (
      <div>
        <input type="text" ref={(input) => {this.trackInput = input }}/>
        <button
          onClick={this.addTrack.bind(this)}
      >
        Add track
      </button>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Task</td>
              <td>Show details</td>
            </tr>
          </thead>
          <tbody>
          {
            this.props.data.map( (item, key) => (
              <tr key={key}>
                <td>{item.date}</td>
                <td>{item.trackName}</td>
                <td>
                  <Link to={`/detail/${item.date}`}>
                    View details
                  </Link>
                </td>
              </tr>
              )
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}


export default connect(
  state => ({
    data: state,
  }),
  dispatch => ({
    onAddTrack: trackName => {
      const field = {
        trackName,
        date: String(new Date().valueOf()),
      };
      return dispatch({
        type: 'ADD_TRACK',
        payload: field,
      });
    }
  })
)(Main);
