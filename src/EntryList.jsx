import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryForm from './EntryForm';
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
        <div>
          <h2 style={{ display: 'inline' }}>{this.props.selectedDate}</h2>
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
