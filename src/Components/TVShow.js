import React from 'react';

const tvShow = () => {
  return (
    <div>
      <br/>
      <img src={props.image.medium} onClick={props.selectShow} alt=""/>
    </div>
  );
}

export default tvShow;
