import React from "react";
import SongList from "../components/MusicList.js"
import SongItem from "../components/MusicItem.js"

class Top20Box extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allMusic: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  // make request
  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      // console.log(request.status);
      if (request.status !== 200) return
      const jsonString = request.responseText;
      const musicObjects = JSON.parse(jsonString);
      // console.log("musicObjects", musicObjects);
      this.setState({allMusic: musicObjects.feed.entry})
    });
    // console.log("allMusic", this.state.allMusic[0]);
    request.send()
  }

  render(){
    // const musicArtist = this.state.allMusic.map(music => music)
    // const countryNames = this.state.countries.map(country => country.name)
    // console.log("musicArtist", musicArtist);
    console.log("allMusic.feed", this.state.allMusic);
    return(
      <div>
        <h1>iTunes Top 20</h1>
        <MusicList music={this.state.allMusic} />
      <div/>
    )
  }

}

  export default Top20Box
