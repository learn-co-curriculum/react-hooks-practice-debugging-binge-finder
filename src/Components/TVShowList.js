import React, { Component } from 'react';
import TVShow from './TVShow';
import {Grid} from 'semantic-ui-react';

class TVShowList extends Component {

  mapAllShows = () => {
    if (!!this.props.searchTerm){
      return this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)){
          return (<TVShow show={s} key={s.id}/>)
        }
      })
    }

    return this.props.shows.map( (s)=> {
      return (<TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
    })
  }

  render() {
    return (
      <div className="tvShowList">
        <Grid rows={2}>
          {this.mapAllShows()}
        </Grid>
      </div>
    );
  }

}

export default TVShowList;
