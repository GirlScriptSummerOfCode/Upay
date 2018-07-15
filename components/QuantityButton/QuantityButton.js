import React from 'react';
import PropTypes from 'prop-types';

export default class QuantityButton extends React.Component {
  static propTypes = {
    qty: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
  };

  render() {
    const { qty, increment, decrement } = this.props;
    return (
      <React.Fragment>
        <style jsx>{`
          .quantity_container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .increment_button,
          .decrement_button {
            width: 44px;
            height: 40px;
            margin: 0px;
            border: 1px solid #535766;
            text-align: center;
            font-size: 16pt;
            font-weight: 500;
            color: #535766;
          }
          .quantity {
            width: 80px;
            height: 20px;
            border: 1px solid #535766;
            text-align: center;
            padding: 9px;
          }
        `}</style>
        <div className="quantity_container">
          <button className="increment_button" onClick={increment}>
            +
          </button>
          <div className="quantity">{this.props.qty}</div>
          <button
            disabled={!qty}
            className="decrement_button"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </React.Fragment>
    );
  }
}
