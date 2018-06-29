import React from 'react';

const CheckoutButton = () => (
  <React.Fragment>
    <style jsx>{`
      a {
        background: #3498db;
        background-image: linear-gradient(to bottom, #3498db, #2980b9); 
        border-radius: 28px;
        font-family: Arial;
        color: #ffffff;
        font-size: 20px;
        padding: 10px 20px 10px 20px;
        border: solid #1f628d 0px;
        text-decoration: none;
      }
      a:hover {
        background: #3cb0fd;
        background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        text-decoration: none;
      }
    `}</style>
    <a href="#">Payment Link</a>
  </React.Fragment>
);

export default CheckoutButton;
