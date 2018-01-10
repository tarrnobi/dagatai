import React, { Component } from 'react';
import PropTypes from 'prop-types';

import colours from './style';

const style = {
  calendarItem: {
    listStyleType: 'none',
    display: 'inline-block',
    width: '13.6%',
    textAlign: 'center',
    marginBottom: '5px',
    fontSize: '12px',
  },
  buttonStyle: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
};

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
      <li style={style.calendarItem}>
        <button
          style={style.buttonStyle}
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
