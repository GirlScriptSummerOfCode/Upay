import React from 'react';
import PropTypes from 'prop-types';

export default class Breadcrumb extends React.Component {
  static propTypes = {
    path: PropTypes.string,
  };

  render() {
    const { path } = this.props;
    return (
      <React.Fragment>
        <style jsx>{`
          .breadcrumb {
            margin: 20px;
          }
        `}</style>
        <div className="breadcrumb">
          <a href="/">Home</a>
          {path.replace(/%20/g, ' ')}
        </div>
      </React.Fragment>
    );
  }
}
