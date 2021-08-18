import React from "react";

function tvShow() {
  return (
    <div>
      <br />
      <img src={props.image.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default tvShow;
