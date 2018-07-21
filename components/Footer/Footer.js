import { Fragment, PureComponent } from 'react';
import Link from 'next/link';


export default class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <style jsx>{`
          .footer-distributed {
            background-color: #292c2f;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
            box-sizing: border-box;
            width: 100%;
            text-align: left;
            font: bold 16px sans-serif;
          
            padding: 55px 50px;
            margin-top: 80px;
          }
          
          .footer-distributed .footer-left,
          .footer-distributed .footer-center,
          .footer-distributed .footer-right {
            display: inline-block;
            vertical-align: top;
          }
          
          /* Footer left */
          
          .footer-distributed .footer-left {
            width: 40%;
          }
          
          /* The company logo */
          
          .footer-distributed h3 {
            color: #ffffff;
            font: normal 36px 'Cookie', cursive;
            margin: 0;
          }
          
          .footer-distributed h3 span {
            color: #5383d3;
          }
          
          /* Footer links */
          
          .footer-distributed .footer-links {
            color: #ffffff;
            margin: 20px 0 12px;
            padding: 0;
          }
          
          .footer-distributed .footer-links a {
            display: inline-block;
            line-height: 1.8;
            text-decoration: none;
            color: inherit;
          }
          
          .footer-distributed .footer-company-name {
            color: #8f9296;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
          }
          
          /* Footer Center */
          
          .footer-distributed .footer-center {
            width: 35%;
          }
          
          .footer-distributed .footer-center i {
            background-color: #33383b;
            color: #ffffff;
            font-size: 25px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            margin: 10px 15px;
            vertical-align: middle;
          }
          
          .footer-distributed .footer-center i.fa-envelope {
            font-size: 17px;
            line-height: 38px;
          }
          
          .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            vertical-align: middle;
            margin: 0;
          }
          
          .footer-distributed .footer-center p span {
            display: block;
            font-weight: normal;
            font-size: 14px;
            line-height: 2;
          }
          
          .footer-distributed .footer-center p a {
            color: #5383d3;
            text-decoration: none;
          }
          
          /* Footer Right */
          
          .footer-distributed .footer-right {
            width: 20%;
          }
          
          .footer-distributed .footer-company-about {
            line-height: 20px;
            color: #92999f;
            font-size: 13px;
            font-weight: normal;
            margin: 0;
          }
          
          .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          
          .footer-distributed .footer-icons {
            margin-top: 25px;
          }
          
          .footer-distributed .footer-icons a {
            display: inline-block;
            width: 35px;
            height: 35px;
            cursor: pointer;
            background-color: #33383b;
            border-radius: 2px;
          
            font-size: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 35px;
          
            margin-right: 3px;
            margin-bottom: 5px;
          }
          
          /* If you don't want the footer to be responsive, remove these media queries */
          
          @media (max-width: 880px) {
            .footer-distributed {
              font: bold 14px sans-serif;
            }
          
            .footer-distributed .footer-left,
            .footer-distributed .footer-center,
            .footer-distributed .footer-right {
              display: block;
              width: 100%;
              margin-bottom: 40px;
              text-align: center;
            }
          
            .footer-distributed .footer-center i {
              margin-left: 0;
            }
          }
          
        `}</style>
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
