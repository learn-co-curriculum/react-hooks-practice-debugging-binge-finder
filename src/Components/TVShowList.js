import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';

class TVShowList extends Component {

  mapAllShows = () => {
    if (!!props.searchTerm){
      props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)){
          (<TVShow show={s} key={s.id} selectShow={props.selectShow}/> )
        }
      })
    }
    return props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
