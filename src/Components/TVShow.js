import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const tvShow = (props) => {
  let { show } = props

  return (
    <Card>
    <div onClick={()=> props.selectShow(show)}>
      <h4>{show.name}</h4>
      <img src={show.image.medium} />
    </div>
    </Card>

  );

}

export default tvShow;
