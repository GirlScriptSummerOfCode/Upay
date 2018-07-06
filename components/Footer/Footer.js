import { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './Footer.css';

export default class Footer extends PureComponent {
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
      <Fragment>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              UPAY<span>logo</span>
            </h3>

            <p className="footer-links">
              <Link href="/">
                <a>Home</a>
              </Link>
              ·
              <Link href="/about">
                <a>About</a>
              </Link>
            </p>

            <p className="footer-company-name">UPAY NGO &copy; 2016</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p>
                <span>205, Honey Sagar Apartments,</span>
                <span>Wardhman Nagar Square,</span>
                Nagpur, 440008, Maharashtra
              </p>
            </div>

            <div>
              <i className="fa fa-phone" />
              <p>7030735531</p>
            </div>

            <div>
              <i className="fa fa-envelope" />
              <p>
                <a href="mailto:info@upay.org.in">info@upay.org.in</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              The foundation of development for every society is the education
              of its youth. Keeping this in mind, an NGO UPAY (Underprivileged
              Advancement by Youth), was established in May 2010 by a group of
              young engineers from IITs and NITs.
            </p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/UPAY-%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%AF-245407178844117/?fref=ts">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com/upayorg">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.youtube.com/results?search_query=upay+ngo">
                <i className="fa fa-youtube" />
              </a>
              <a href="https://www.instagram.com/ngo_upay/">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
