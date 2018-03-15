import React, { Component } from "react";
import MusicItem from "./MusicItem"

class MusicList extends Component {

  render(){

    if(!this.props.music) return

    // I quite like the nodes nomenclature
    const musicNodes = this.props.music.map( (musicItem, index) => {
      return(
        <MusicItem
          artist={musicItem['im:artist'].label}
          position={index+1}
          title={musicItem['im:name'].label}
          key={index}
          imageSRC={musicItem['im:image'][0].label}>
        </MusicItem>
      )
    })
    return <div className="MusicList"> {musicNodes} </div>
  }
}
export default MusicList
