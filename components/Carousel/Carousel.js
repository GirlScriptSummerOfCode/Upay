import React from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string,
  };

  changeImage = e => {
    this.refs.displayImage.src = e.target.src;
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <React.Fragment>
        <style jsx>{`
          .image_container {
            width: 50%;
          }
          .thumbnail_big {
            width: 90%;
            height: 480px;
            margin: 20px;
          }
          .thumbnail_small {
            margin: 10px;
            width: 20%;
            height: 66px;
          }
          @media (max-width: 425px) {
            .image_container{
              width: 100%;
            }
          }
        `}</style>
        <div className="image_container">
          <img className="thumbnail_big" ref="displayImage" src={imageUrl} />
          <div>
            <img
              className="thumbnail_small"
              src={imageUrl}
              onMouseOver={this.changeImage}
            />
            <img
              className="thumbnail_small"
              src="/images/upay.png"
              onMouseOver={this.changeImage}
            />
            <img
              className="thumbnail_small"
              src={imageUrl}
              onMouseOver={this.changeImage}
            />
            <img
              className="thumbnail_small"
              src={imageUrl}
              onMouseOver={this.changeImage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
