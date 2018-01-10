import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <h2>New Entry: {this.props.selectedDate}</h2>
        <button onClick={this.handleHideFormClicked}>Hide</button>
        <form>
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
