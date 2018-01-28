import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { style } from './style';

class Item extends Component {
  constructor(props) {
    super(props);
    // function binds
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.itemClicked(this.props.itemDate);
  }
  render() {
    return (
      <li style={style.calendarItem.componentStyle}>
        <button
          style={style.calendarItem.buttonStyle}
          onClick={this.handleClick}
        >
          {this.props.itemDate.getDate()}
        </button>
      </li>);
  }
}

Item.propTypes = {
  itemDate: PropTypes.instanceOf(Date).isRequired,
  itemClicked: PropTypes.func.isRequired,
};

export default Item;
