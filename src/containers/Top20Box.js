import React from "react";
import MusicList from "../components/MusicList.js"
// import MusicItem from "../components/MusicItem.js"

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
      if (request.status !== 200) return
      const jsonString = request.responseText;
      const musicObjects = JSON.parse(jsonString);
      this.setState({allMusic: musicObjects.feed.entry})
    });
    request.send()
  }

  render(){
    return(
      <div>
        <h1>iTunes Top 20</h1>
        <MusicList music={this.state.allMusic} />
      </div>
    )
  }

}

export default Top20Box
