import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EntryItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.itemDate.toLocaleDateString()}</h2>
        <span>{this.props.author}</span>
        <p>{this.props.text}</p>
        <hr />
      </div>
    );
  }
}

EntryItem.propTypes = {
  itemDate: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onEventDelete: PropTypes.func.isRequired,
};

export default EntryItem;
