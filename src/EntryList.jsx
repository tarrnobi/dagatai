import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import EntryItem from './EntryItem';
import colours from './style';

const FA = require('react-fontawesome');

const style = {
  entryListPanel: {
    backgroundColor: colours.charcoalLightest,
    display: 'inline-block',
    margin: '0',
    width: '50%',
    minHeight: '200px',
    clear: 'both',
  },
  buttonTransparent: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
};

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEntryForm: false,
      events: [],
    };
    this.handleHideClicked = this.handleHideClicked.bind(this);
    this.handleAddEntryFormClicked = this.handleAddEntryFormClicked.bind(this);
    this.handleHideEntryFormClicked = this.handleHideEntryFormClicked.bind(this);
    // api handlers
    this.loadEventsFromAPI = this.loadEventsFromAPI.bind(this);
    this.handleCreateNewEvent = this.handleCreateNewEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
  }
  componentDidMount() {
    this.loadEventsFromAPI();
  }

  handleHideClicked() {
    this.props.hideEntryList();
  }

  handleAddEntryFormClicked() {
    this.setState({ showEntryForm: true });
  }

  handleHideEntryFormClicked() {
    this.setState({ showEntryForm: false });
  }

  async loadEventsFromAPI() {
    const response = await axios.get(this.props.endPoint);
    this.setState({ events: response.data });
  }
  async handleCreateNewEvent(event) {
    const response = await axios.post(this.props.endPoint, event);
    console.log(response);
    this.loadEventsFromAPI();
  }
  async handleDeleteEvent(id) {
    const response = await axios.delete(`${this.props.endPoint}/${id}`);
    console.log(response);
    this.loadEventsFromAPI();
  }
  async handleUpdateEvent(id, event) {
    const response = await axios.put(`${this.props.endPoint}/${id}`, event);
    console.log(response);
    this.loadEventsFromAPI();
  }

  generateEntryItems() {
    const entries = this.state.events.map(item => (
      <EntryItem
        key={item._id}
        eventID={item._id}
        itemDate={new Date(item.entryDate)}
        author={item.author}
        text={item.text}
        onNewEvent={this.handleCreateNewEvent}
        onEditEvent={this.handleUpdateEvent}
        onDeleteEvent={this.handleDeleteEvent}
        onHideForm={this.handleHideEntryFormClicked}
      />
    ));
    return entries;
  }

  render() {
    return (
      <div style={style.entryListPanel}>
        <div>
          <h2 style={{ display: 'inline' }}>{this.props.selectedDate.toLocaleDateString()}</h2>
          <button
            style={Object.assign({}, style.buttonTransparent, { float: 'right' })}
            onClick={this.handleHideClicked}
          >
            <FA name="times" size="2x" />
          </button>
          <button
            onClick={this.handleAddEntryFormClicked}
            style={Object.assign({}, style.buttonTransparent, { float: 'right' })}
          >
            <FA name="plus" size="2x" />
          </button>
          <hr />
        </div>
        {this.state.showEntryForm === true &&
          <EntryItem
            key="-1"
            itemDate={new Date(this.props.selectedDate)}
            onNewEvent={this.handleCreateNewEvent}
            onEditEvent={this.handleUpdateEvent}
            onDeleteEvent={this.handleDeleteEvent}
            onHideForm={this.handleHideEntryFormClicked}
          />
        }
        {this.state.events.length > 0 &&
          this.generateEntryItems()
        }
      </div>
    );
  }
}

EntryList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  hideEntryList: PropTypes.func.isRequired,
  endPoint: PropTypes.string.isRequired,
};

export default EntryList;
