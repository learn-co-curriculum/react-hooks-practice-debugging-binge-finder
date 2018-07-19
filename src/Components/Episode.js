import React from 'react';

const Episode = (props) => {
  let { myEpisode } = props

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  )
}

export default Episode;
