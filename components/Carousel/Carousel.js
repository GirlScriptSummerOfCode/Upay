import React from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends React.PureComponent {
  constructor(props){
    super(props);
    this.displayImage = React.createRef();
  }
  static propTypes = {
    imageUrls: PropTypes.array,
  };

  changeImage = e => {
    this.displayImage.current.src = e.target.src;
  };

  render() {
    const { imageUrls } = this.props;
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
          @media (max-width: 650px) {
            .image_container {
              width: 100%;
            }
          }
        `}</style>
        <div className="image_container">
          <img
            className="thumbnail_big"
            ref={this.displayImage}
            src={imageUrls[0]}
          />
          <div>
            {imageUrls.map((src,i) => (
              <img key={i} className="thumbnail_small" src={src} onMouseOver={this.changeImage} />
            )
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
