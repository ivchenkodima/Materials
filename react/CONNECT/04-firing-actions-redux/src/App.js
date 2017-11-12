import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    input: ''
  };

  render() {
    const { onClickAddTrack = () => {}} = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={v => this.setState({
            input: v.target.value,
          })}
        />
        <button
          onClick={() =>  {
            this.state.input && onClickAddTrack(this.state.input)}
          }
        >
          Add track
          </button>
        <ul>
          {this.props.list.map((track, i) => (
            <li key={i}>{track}</li>)
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state });

const mapDispatchToProps = dispatch => ({ 
    onClickAddTrack: (newItem) => dispatch({
      type: "ADD_TRACK",
      payload: {
        value: newItem,
        id: Date.now()
      },
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);




