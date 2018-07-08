import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

let Button = nameButton => {
  return (
    <div>
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}
      >
        {nameButton}
      </button>
    </div>
  );
};

export default Button;
