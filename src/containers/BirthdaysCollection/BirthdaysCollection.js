import React, { Component } from 'react';
import './style.scss';

class BirthdaysCollection extends Component {
  render() {
    return (
      <div className="base-container-div">
        <div className="title-container">
          <h3 className="title">Intive - FDV Exercise </h3>
        </div>
        <div className="main-data-container">
          <div className="left-container">Left</div>
          <div className="right-container">
            right
            <div className="half-containers">Bottom right</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdaysCollection;
