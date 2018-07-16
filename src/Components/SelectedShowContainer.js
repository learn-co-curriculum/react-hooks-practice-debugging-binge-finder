import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }



  mapSeasons = () => {
    if (!!this.props.episodes){
      let seasons = this.props.episodes.map((e)=> e.season).unique()

      return seasons.map((s) => {
        return (<option value={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    return this.props.episodes.map((e)=>{
      if (e.season == this.state.selectedSeason){
        return (<Episode episode={e} key={e.id}/>)
      }
    })
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div>
        <h4>{selectedShow.name}</h4>
        <img src={selectedShow.image.medium} />
        <p>{selectedShow.summary}</p>
        <p>Premiered {selectedShow.premiered}</p>
        <p>Status {selectedShow.status}</p>
        <p>Rating {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>

          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;


Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
