import React from 'react';
import Link from 'next/link';
import Rupee from '../Icons/Rupee';
import PropTypes from 'prop-types';

const Item = props => (
  <React.Fragment>
    <style jsx>{`
      s {
        color: #696b79;
        font-weight: bold;
      }

      .product_card {
        /* change --product_font-size to change the font-size of card*/
        font-size: 14px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        list-style-type: none;
        margin: 10px 1%;
        width: 23%;
      }

      .product_card:hover .product_buttons {
        display: block;
      }

      .product_body {
        padding: 8px;
        text-align: center;
      }
      .product_body a {
        font-weight: bold;
        text-decoration: none;
      }

      .product_name {
        height: 30px;
      }

      .product_price {
        height: 30px;
        font-weight: bold;
      }

      .product_buttons {
        position: relative;
        margin-top: -30px;
        bottom: 50px;
        display: none;
      }

      .product_buttons div {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #b6b6b6;
        width: 50%;
        float: left;
        padding: 8px;
        padding-top: 10px;
        height: 30px;
        background: white;
      }

      @media (max-width: 768px) {
        .product_card {
          margin: 10px 1.5%;
          width: 30%;
        }
      }

      @media (max-width: 425px) {
        .product_card {
          margin: 10px 2%;
          width: 46%;
        }
      }
    `}</style>
    <li className="product_card">
      <Link href={`/product/${props.id}`}>
        <img width="100%" src={props.imageUrls[0]} alt={props.name} />
      </Link>
      <div className="product_body">
        <div className="product_name">
          <a href="#">{props.name}</a>
        </div>
        <div className="product_price">
          {/* This code handles price. */}
          {/* If discounted price is available, it displays discounted price and strikes-through original price. */}
          {/* If discounted price is not available, it displays original price. */}
          {props.discountedPrice && (
            <span>
              <Rupee height=".8em" />
              {props.discountedPrice}&nbsp;&nbsp;&nbsp;
            </span>
          )}
          {props.discountedPrice ? (
            <s>
              <Rupee height=".8em" />
              {props.originalPrice}
            </s>
          ) : (
            <span>
              <Rupee height=".8em" />
              {props.originalPrice}
            </span>
          )}
        </div>
      </div>
      <div className="product_buttons">
        {/* Add the buttons later */}
        <div className="add_button">Add</div>
        <div className="save_for_later">SaveForLater</div>
      </div>
    </li>
  </React.Fragment>
);

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  originalPrice: PropTypes.number,
  discountedPrice: PropTypes.number,
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
export default Item;
