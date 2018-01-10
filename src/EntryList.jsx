import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryForm from './EntryForm';
const style = {
  entryListPanel: {
    marginLeft: '80%',
    display: 'inline-block',
  },
}
class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEntryForm: false,
    };
    this.handleHideClicked = this.handleHideClicked.bind(this);
    this.handleAddEntryFormClicked = this.handleAddEntryFormClicked.bind(this);
    this.handleHideEntryFormClicked = this.handleHideEntryFormClicked.bind(this);
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
  render() {
    return (
      <div style={style.entryListPanel}>
        <h2>Entries For: {this.props.selectedDate}</h2>
        <button onClick={this.handleAddEntryFormClicked}>Add Entry</button>
        <button onClick={this.handleHideClicked}>Hide</button>
        {this.state.showEntryForm === true &&
          <EntryForm
            selectedDate={this.props.selectedDate}
            hideForm={this.handleHideEntryFormClicked}
          />
        }
      </div>
    );
  }
}

EntryList.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  hideEntryList: PropTypes.func.isRequired,

};

export default EntryList;
