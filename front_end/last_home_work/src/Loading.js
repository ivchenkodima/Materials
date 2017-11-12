import React, { Component } from 'react';


class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dot: '',
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const dot = this.state.dot;
      this.setState({
        dot: dot.length > 3 ? '' : `${dot}.`,
      });
    }, 100);

  }
  componentWillUnmout() {
    clearInterval(this.interval);
  }

  render() {
    const { type = "Link" } = this.props;

    const button = React.createElement(type, {});
    return (
      <div><div>
        {button}
      </div>
        {`Loading ${this.state.dot}`}</div>
    )
  }
}
export default  Loading;