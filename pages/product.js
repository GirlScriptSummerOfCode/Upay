import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import Bookmark from '../components/Icons/Bookmark';
import QuantityButton from '../components/QuantityButton';
import Breadcrumb from '../components/Breadcrumb';
import Carousel from '../components/Carousel';
import ProductInfo from '../components/ProductInfo';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { server } from '../server/config';

/**
 * Product Details Page
 *
 * @export
 * @class ProductPage
 * @extends {React.PureComponent}
 */
class ProductPage extends React.PureComponent {
  state = {
    qty: 0,
  };

  static propTypes = {
    Item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrls: PropTypes.array,
      originalPrice: PropTypes.number,
      discountedPrice: PropTypes.number,
    }),
  };

  static getInitialProps = async ({ query, res }) => {
    const { id } = query;
    if (!id && res) {
      res.statusCode = 404;
      return { Item: null };
    }
    const { data: Item } = await fetch(`${server}/api/items/${id}`).then(r =>
      r.json()
    );
    return { Item };
  };
  increment = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };
  decrement = () => {
    this.setState({
      qty: this.state.qty - 1,
    });
  };
  render() {
    const { router, Item } = this.props;
    if (!Item) return <Error status={404} />;
    return (
      <div className="wrapper">
        <style jsx>{`
          .wrapper {
            width: 80%;
            margin: auto;
          }
          .product_container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .description_container {
            width: 50%;
          }
          .add_to_cart_button,
          .save_button {
            width: 40%;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            font-weight: 500;
            margin: 10px;
          }
          .add_to_cart_button {
            background: #20bd99;
          }
          .save_button {
            background: #535766;
          }
          .action_container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          @media (max-width: 850px) {
            .wrapper {
              width: 100%;
            }
            .add_to_cart_button,
            .save_button {
              width: 80%;
            }
          }
          @media (max-width: 650px) {
            .wrapper {
              margin-bottom: 32px;
            }
            .description_container {
              width: 100%;
            }
            .action_container {
              width: 100%;
              position: fixed;
              bottom: 0px;
            }
            .save_button,
            .add_to_cart_button {
              margin: 0px;
              width: calc((100% - 40px) / 2);
              border-radius: 0px;
              height: 30px;
              font-size: 16pt;
            }
          }
        `}</style>
        <Breadcrumb path={router.asPath} />
        <div className="product_container">
          <Carousel imageUrls={Item.imageUrls} />
          <div className="description_container">
            <ProductInfo
              name={Item.name}
              originalPrice={Item.originalPrice}
              discountedPrice={Item.discountedPrice}
            />
            <QuantityButton
              qty={this.state.qty}
              increment={this.increment}
              decrement={this.decrement}
            />
            <div className="delivery_container">
              <h4>Delivery Options</h4>
            </div>
            <div className="action_container">
              <div className="save_button">
                <Bookmark fill="#fff" style={{ marginRight: '10px' }} />
                Save
              </div>
              <div className="add_to_cart_button">Add To Cart</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductPage);
