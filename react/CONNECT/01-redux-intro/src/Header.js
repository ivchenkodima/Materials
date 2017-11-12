import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('items', this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) =>
          <a href={item.link} key={item}>{item.label}</a>
        )}
      </div>
    );
  }
}

export default Header;
