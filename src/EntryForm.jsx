import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FA = require('react-fontawesome');

const style = {
  buttonTransparent: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  textArea: {
    minWidth: '98%',
    maxWidth: '100%',
    resize: 'none',
  },
};

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.handleHideFormClicked = this.handleHideFormClicked.bind(this);
  }

  handleHideFormClicked() {
    this.props.hideForm();
  }
  render() {
    return (
      <div>
        <h2 style={{ display: 'inline' }}>New Entry</h2>
        <button
          style={Object.assign({}, style.buttonTransparent, { float: 'right' })}
          onClick={this.handleHideFormClicked}
        >
          <FA name="times" size="2x" />
        </button>
        <form>
          <textarea
            style={style.textArea}
            rows="5"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

EntryForm.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  hideForm: PropTypes.func.isRequired,
};

export default EntryForm;
