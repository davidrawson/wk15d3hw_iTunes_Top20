import React, { Component } from "react";
import MusicItem from "./MusicItem"

class MusicList extends Component {

  // constructor (props){
  //   super(props)
  // }

  render(){

    if(!this.props.music) return

    // I quite like the nodes nomenclature
    // console.log("this.props.music[0]['im:artist']", this.props.music[0]['im:artist']);
    const musicNodes = this.props.music.map( (musicItem, index) => {
      return(
        <MusicItem artist={musicItem['im:artist'].label} position={index+1} title={musicItem['im:name'].label} key={index}>

        </MusicItem>
      )
    })
    return <div className="MusicList"> {musicNodes} </div>
    // console.log(musicNodes);
  }
}
export default MusicList
