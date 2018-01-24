import React, { Component } from 'react';
import Item from './Item';
import EntryList from './EntryList';

import colours from './style';

const style = {
  container: {
  },
  calendarSection: {
    border: `solid ${colours.Primary4} 3px`,
    backgroundColor: colours.charcoalLight,
  },
  datePanel: {
    backgroundColor: colours.charcoalLighter,
    display: 'inline-block',
    verticalAlign: 'top',
    maxWidth: '50%',
    margin: '0',
    padding: '0',
  },
  header: {
    backgroundColor: colours.Primary0,
    minHeight: '30px',
    fontSize: '2em',
    fontFamily: 'Impact, sans-serif',
    color: colours.PrimaryText0,
  },

};
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
      selectedDate: date,
      showEntryList: true,
    });
  }
  hideEntryList() {
    this.setState({ showEntryList: false });
  }

  render() {
    return (
      <div style={style.container}>
        <header style={style.header}>
          Dagata.io
        </header>
        <div style={style.calendarSection}>
          <h2>{ this.state.activeDate.toLocaleString(this.state.locale, { month: 'long' }) }</h2>
          <ul style={style.datePanel}>
            {this.generateCalendarItems()}
          </ul>
          {this.state.showEntryList === true &&
            <EntryList
              selectedDate={this.state.selectedDate}
              hideEntryList={this.hideEntryList}
              endPoint={`${process.env.REACT_APP_API_HOST}/api/events`}
            />
          }
        </div>
      </div>
    );
  }
}

export default Calendar;
