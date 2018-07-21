import React from 'react';
export default class AddToCart extends React.PureComponent {
 
  render() {
    return (
      <React.Fragment>
        <style jsx>{`
          button {
            background-color: #e33812;   
            font-size: 16px;
            border-radius: 12px;
    
            color: white;
            padding: 15px 32px;
            text-align: center;
            display: inline-block;
            font-size: 16px;
            border-radius: 12px;
    
                `}</style>
        
        <button onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </React.Fragment>
 );
}
}
