import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class KopSurat extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { text } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td width="25%" />
          <td className="head">{text}</td>
          <td width="25%" />
        </tr>
        {this.props.children}
      </React.Fragment>
    );
  }
}
