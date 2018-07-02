import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @export
 * @class buybutton
 * @augments {React.PureComponent<buybuttonProps>}
 */
export default class buybutton extends React.PureComponent {
  /**
   * @typedef {object} buybuttonProps
   * @property {array} links
   *
   * @static
   * @memberof buybutton
   */
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      })
    ).isRequired,
  };

  render() {
    return (
      <React.Fragment>
         <button>Buy Now</button>
      </React.Fragment>
    );
  }
}