import React from 'react';
import PropTypes from 'prop-types';
import Rupee from '../Icons/Rupee';

export default class ProductInfo extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    originalPrice: PropTypes.number,
    discountedPrice: PropTypes.number,
  };
  render() {
    const { name, originalPrice, discountedPrice } = this.props;
    return (
      <React.Fragment>
        <div className="product_info_container">
          <h1>{name}</h1>
          {originalPrice ? (
            <s>
              <Rupee />
              {originalPrice}
            </s>
          ) : (
            <span>
              <Rupee />
              {originalPrice}
            </span>
          )}
          {discountedPrice && (
            <span>
              <Rupee />
              <strong>{discountedPrice}</strong>
            </span>
          )}
          <p>Product description here</p>
        </div>
      </React.Fragment>
    );
  }
}
