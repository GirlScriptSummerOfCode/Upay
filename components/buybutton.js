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
   * @property {function} onClick
   * 
   *  @static
   * @memberof BuyNow
   */


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