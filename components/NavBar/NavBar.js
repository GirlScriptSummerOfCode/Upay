import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

/**
 *
 *
 * @export
 * @class NavBar
 * @augments {React.PureComponent<NavBarProps>}
 */
export default class NavBar extends React.PureComponent {
  /**
   * @typedef {object} NavBarProps
   * @property {array} links
   *
   * @static
   * @memberof NavBar
   */
  static propTypes = {
    /** Links Array */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        /** Link URL */
        url: PropTypes.string,
        /** Link Title */
        title: PropTypes.string,
      })
    ).isRequired,
  };

  render() {
    return (
      <React.Fragment>
        <style jsx>{`
          nav {
            background: linear-gradient(90deg, violet, limegreen);
          }
          nav ul {
            margin: 0;
            padding: 20px;
            list-style: none;
          }
          nav ul li {
            display: inline-block;
            margin: 5px;
          }
          nav ul li a {
            color: white;
            text-decoration: none;
          }
        `}</style>
        <nav>
          <ul>
            {this.props.links.map(({ url, title }, i) => (
              <li key={i}>
                <Link href={url}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
