import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class KopSurat extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { imgleft, imgRight, text } = this.props;
    return (
      <tr className="header-mail">
        {imgleft ? (
          <React.Fragment>
            <td className="left">
              <img scr={imgleft} />
            </td>
            <td className="center" colSpan="2">
              {text}
            </td>
            <td className="center" colSpan="2">
              {text}
            </td>
          </React.Fragment>
        ) : imgleft && imgRight ? (
          <React.Fragment>
            <td className="left">left</td>
            <td className="center">{text}</td>
            <td className="center" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <td className="left" />
            <td className="center">{text}</td>
            <td className="right" />
          </React.Fragment>
        )}
      </tr>
    );
  }
}
