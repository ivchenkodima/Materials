var React = require('react');

module.exports = React.createClass({
  render: function() {
    const {className, whenItemClicked, item} = this.props;
    return <li className={className}>
      <a onClick={() => whenItemClicked(item)}>
        {this.props.item}
      </a>
    </li>
  }
});
