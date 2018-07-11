import React from 'react';
/**
 *
 *
 * @export
 * @class BuyNow
 * @augments {React.PureComponent<BuyNowProps>}
 */
export default class BuyNow extends React.PureComponent {
  /**
   * @typedef {object} BuyNowProps
   * 
   *  @static
   * @memberof BuyNow
   */

  clicked (){
    console.log('the button is clicked'); //eslint-disable-line no-console
  }

  render() {
    return (
      <React.Fragment>
        <style jsx>{`
          button {
            background-color: #e33812;
            color: white;
            padding: 15px 32px;
            text-align: center;
            display: inline-block;
            font-size: 16px;
            border-radius: 12px;
    
          }
        `}</style>
        
        <button onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}