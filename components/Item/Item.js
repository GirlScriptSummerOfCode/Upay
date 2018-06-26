import React from 'react';

const Item = ({ name }) => (
  <React.Fragment>
    <style jsx>{`
      li {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        max-width: 500px;
      }
    `}</style>
    <li>{name}</li>
  </React.Fragment>
);

export default Item;
