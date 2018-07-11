import React from 'react';
import Rupee from '../components/Icons/Rupee';
import Bookmark from '../components/Icons/Bookmark';
import { withRouter } from 'next/router';

class ProductPage extends React.PureComponent{

  state ={
    qty: 1,
  };

  changeImage = (e)=>{
    this.refs.displayImage.src = e.target.src;
  }
  increment = () =>{
    this.setState({
      qty: this.state.qty + 1,
    });
  }
  decrement = () =>{
    this.setState({
      qty: this.state.qty - 1,
    });
  }
  render(){
    const {router} = this.props;
    return(
      <div className="wrapper">
        <style jsx>{`
          .breadcrumb{
            margin: 20px;
          }
          .wrapper{
            width: 80%;
            margin: auto;
          }
          .product_container{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
          }
          .image_container, .description_container{
            width: 50%;
          }
          .add_to_cart_button, .save_button{
            width: 40%;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            color: #FFF;
            font-weight: 500;
            margin: 10px;
          }
          .add_to_cart_button{
            background: #20BD99;
          }
          .save_button{
            background: #535766;
          }
          .thumbnail_big{
            width: 90%;
            height: 480px;
            margin: 20px;
          }
          .thumbnail_small{
            margin: 10px;
            width: 20%;
            height: 66px;
          }
          .action_container, .quantity_container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .increment_button,.decrement_button{
              width: 44px;
              height: 40px;
              margin: 0px;
              border: 1px solid #535766;
              text-align: center;
              font-size: 16pt;
              font-weight: 500;
              color: #535766;
          }
          .quantity{
            width: 80px;
            height: 20px;
            border: 1px solid #535766;
            text-align: center;
            padding: 9px;
          }
          @media (max-width: 768px){
            .wrapper{
              width: 100%;
            }
            .add_to_cart_button, .save_button{
              width: 80%;
            }
          }
          @media (max-width: 425px){
            .wrapper{
              margin-bottom: 32px;
            }
            .image_container, .description_container{
              width: 100%;
            }
            .action_container{
              width: 100%;
              position: fixed;
              bottom: 0px;
            }
            .save_button, .add_to_cart_button{
              margin: 0px;
              width: calc((100% - 40px )/2);
              border-radius: 0px;
              height: 30px;
              font-size: 16pt;
            }
          }
        `}</style>
        <div className="breadcrumb">
          <a href="/">Home</a>
          {router.asPath.replace(/%20/g,' ')}
        </div>
        <div className="product_container">
          <div className="image_container">
            <img className="thumbnail_big" ref="displayImage" src={router.query.image} />
            <div>
              <img className="thumbnail_small"
                src={router.query.image}
                onMouseOver={this.changeImage} />
              <img className="thumbnail_small"
                src="/images/upay.png"
                onMouseOver={this.changeImage} />
              <img className="thumbnail_small"
                src={router.query.image}
                onMouseOver={this.changeImage} />
              <img className="thumbnail_small"
                src={router.query.image}
                onMouseOver={this.changeImage} />
            </div>
          </div>

          <div className="description_container">
            <div className="product_info_container">
              <h1>{router.query.name}</h1>
              {router.query.dprice ? (
                <s>
                  <Rupee />
                  {router.query.price}
                </s>
              ):(
                <span>
                  <Rupee />
                  {router.query.price}
                </span>
              )}
              {router.query.dprice && (
                <span>
                  <Rupee />
                  <strong>{router.query.dprice}</strong>
                </span>
              )}
              <p>Product description here</p>
            </div>
            <div className="quantity_container">
              <button className="increment_button" onClick={this.increment}>+</button>
              <div className="quantity">{this.state.qty}</div>
              <button disabled={!this.state.qty} className="decrement_button" onClick={this.decrement}>-</button>
            </div>
            <div className="delivery_container">
              <h4>Delivery Options</h4>
            </div>
            <div className="action_container">
              <div className="save_button">
                <Bookmark fill="#fff" style={{marginRight: '10px'}} />
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
