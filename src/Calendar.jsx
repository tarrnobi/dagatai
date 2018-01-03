import React, { Component } from 'react';
import Item from './Item';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDate: new Date(),
      locale: 'en-US',
      showEntryList: false,
    };

    this.handleChildDaySelection = this.handleChildDaySelection.bind(this);
    this.hideEntryList = this.hideEntryList.bind(this);
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
        <Item
          key={itemDate}
          itemDate={itemDate}
          itemClicked={this.handleChildDaySelection}
        />
      );
    });
    return items;
  }
  handleChildDaySelection(date) {
    this.setState({
      selectedDate: date.toLocaleDateString(),
      showEntryList: true,
    });
  }
  hideEntryList() {
    this.setState({ showEntryList: false })
  }

  render() {
    return (
      <div>
        <h2>Dagata.io</h2>
        <h2>{ this.state.activeDate.toLocaleString(this.state.locale, { month: 'long' }) }</h2>
        <h2>Num Days: { this.getDaysInMonth() }</h2>
        <h2>Selected Day: { this.state.selectedDate }</h2>
        <ul className="days">
          {this.generateCalendarItems()}
        </ul>
        {this.state.showEntryList === true &&
          <div>
            <h2>Entries For: {this.state.selectedDate}</h2>
            <button onClick={this.hideEntryList}>Hide</button>
          </div>
        }
      </div>
    );
  }
}

export default Calendar;
