import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class Detail extends Component {
  
 onEdit(date) {
    this.props.onEditTask(this.trackValue, date);
    browserHistory.push('/main');
  }

  onCheck(currentValue, trackName){
    this.trackValue = currentValue;
     let disable = (currentValue !== trackName) ? '' : 'disabled';
     this.setState({
       disabled: disable,
     });
  }

  state = {
    disabled: 'disabled',
  };

  render() {
    //console.log(this.state)
    //console.log(this.props);
    const  { item }  = this.props;
    //console.log( this.props)

    return (
      <div>
        Detail!!
        <input type="text" defaultValue={item[0].trackName} onChange={(input) => { this.onCheck(input.target.value, item[0].trackName)} } />
        <input type="text" defaultValue={item[0].date} />
        <button type="button" disabled = {this.state.disabled} onClick = {(input) => { this.onEdit(item[0].date)} }>Edit</button>
      </div>
    );
  }
}

export default connect((state, props) => ({
  item: state.filter( item => {
    //console.log(state);
    return item.date === props.params.date;
  }),
}),
dispatch => ({
    onEditTask: (trackValue, date) => {
      const field = {
        trackValue,
        date
      };
      return dispatch({
        type: 'ON_EDIT_TASK',
        payload: field,
      });
    }
  }))(Detail);
