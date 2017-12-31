import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  calendarItem: {
    listStyleType: 'none',
    display: 'inline-block',
    width: '13.6%',
    textAlign: 'center',
    marginBottom: '5px',
    fontSize: '12px',
    color: '#777',
  },
};

class CalendarItem extends Component {
  render() {
    return (
      <li style={style.calendarItem}>
        {this.props.itemDate.getDate()}
      </li>);
  }
}

CalendarItem.propTypes = {
  itemDate: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarItem;
