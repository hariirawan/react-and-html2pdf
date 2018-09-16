import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Border extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td colSpan="3" className="border" />
        </tr>
        <tr>
          <td colSpan="3" className="border-1" />
        </tr>
      </React.Fragment>
    );
  }
}
