import React from 'react';
import PropTypes from 'prop-types';

const getStyle = direction => {
  const { TOP, LEFT, RIGHT, BOTTOM } = Chevron.DIRECTIONS;
  let transform = '';
  switch (direction) {
  case TOP: {
    transform = 'rotate(0deg)';
    break;
  }
  case LEFT: {
    transform = 'rotate(-90deg)';
    break;
  }
  case RIGHT: {
    transform = 'rotate(90deg)';
    break;
  }
  case BOTTOM: {
    transform = 'rotate(180deg)';
    break;
  }
  }

  return {
    OTransform: transform,
    WebKitTransform: transform,
    MozTransform: transform,
    transform,
  };
};

const Chevron = props => (
  <svg
    viewBox="0 0 448 512"
    style={{
      ...getStyle(props.direction),
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
  </svg>
);

Chevron.DIRECTIONS = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
};

Chevron.propTypes = {
  direction: PropTypes.oneOf([0, 1, 2, 3]),
};
export default Chevron;
