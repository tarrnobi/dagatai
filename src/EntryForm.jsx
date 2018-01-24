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
    this.state = {
      author: '',
      text: '',
    };
    this.handleHideFormClicked = this.handleHideFormClicked.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHideFormClicked() {
    this.props.hideForm();
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!author || !text) {
      return;
    }
    this.props.onEventSubmit({
      author,
      text,
      entryDate: this.props.selectedDate,
    });
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your name..."
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <textarea
            style={style.textArea}
            rows="5"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

EntryForm.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  hideForm: PropTypes.func.isRequired,
  onEventSubmit: PropTypes.func.isRequired,
};

export default EntryForm;
