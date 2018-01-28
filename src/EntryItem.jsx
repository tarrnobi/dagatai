import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const FA = require('react-fontawesome');

class EntryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.author || '',
      text: this.props.text || '',
      editMode: this.props.eventID ? false : true,
    };
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.saveNewEvent = this.saveNewEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    // form bindings
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEditEvent(e) {
    e.preventDefault();
    this.setState({ editMode: true });
  }

  // form handlers
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // if there's no event id, save new, otherwise update
    if (!this.props.eventID) {
      this.saveNewEvent();
    } else {
      this.editEvent();
    }
    this.setState({ editMode: false });
    this.props.onHideForm();
  }
  handleDeleteEvent(e) {
    e.preventDefault();
    this.props.onDeleteEvent(this.props.eventID);
  }
  saveNewEvent() {
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!author || !text) return;
    this.props.onNewEvent({
      author,
      text,
      entryDate: this.props.itemDate,
    });
  }
  editEvent() {
    const id = this.props.eventID;
    const event = {
      author: this.state.author.trim(),
      text: this.state.text.trim(),
      entryDate: this.props.itemDate,
    };
    this.props.onEditEvent(id, event);
  }


  renderEditMode() {
    return (
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
    );
  }
  renderViewMode() {
    return (
      <div>
        <div>
          <h2 style={{ display: 'inline' }}>{this.props.itemDate.toLocaleDateString()}</h2>
          <button
            style={Object.assign({}, style.buttonTransparent, { float: 'right' })}
            onClick={this.handleDeleteEvent}
          >
            <FA name="trash" size="2x" />
          </button>
          <button
            onClick={this.handleEditEvent}
            style={Object.assign({}, style.buttonTransparent, { float: 'right' })}
          >
            <FA name="pencil" size="2x" />
          </button>
        </div>
        <span>{this.props.author}</span>
        <p>{this.props.text}</p>
        <hr />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.editMode === true &&
          this.renderEditMode()
        }
        {this.state.editMode === false &&
          this.renderViewMode()
        }
      </div>
    );
  }
}

EntryItem.propTypes = {
  eventID: PropTypes.string.isRequired,
  itemDate: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onNewEvent: PropTypes.func.isRequired,
  onEditEvent: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  onHideForm: PropTypes.func.isRequired,
};

export default EntryItem;
