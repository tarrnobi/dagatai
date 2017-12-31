import React, { Component } from 'react';
import CalendarItem from './CalendarItem';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDate: new Date(),
      locale: 'en-US',
    };
  }
  getDaysInMonth() {
    const d = new Date(
      this.state.activeDate.getFullYear(),
      this.state.activeDate.getMonth() + 1, // Jump Ahead One month
      0,
    ); // Last Day of previous Month
    return d.getDate();
  }

  generateCalendarItems() {
    const numDays = this.getDaysInMonth();
    const items = [...Array(numDays)].map((e, i) => {
      const itemDate = new Date(
        this.state.activeDate.getFullYear(),
        this.state.activeDate.getMonth(),
        i + 1,
      );
      return (
        <CalendarItem
          key={itemDate}
          itemDate={itemDate}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <div>
        <h2>Dagata.io</h2>
        <h2>{ this.state.activeDate.toLocaleString(this.state.locale, { month: 'long' }) }</h2>
        <h2>Num Days: { this.getDaysInMonth() }</h2>
        <ul className="days">
          {this.generateCalendarItems()}
        </ul>
      </div>
    );
  }
}

export default Calendar;
