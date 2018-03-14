import React from "react";
import MusicList from "../components/MusicList.js"
import MusicSelect from "../components/MusicSelect.js"
// import MusicItem from "../components/MusicItem.js"

class Top20Box extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allMusic: [],
      selectedChartURL: null
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChartSelected = this.handleChartSelected.bind(this);

  }

  // make request
  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    console.log(this.selectedChartURL);

    if (this.selectedChartURL != null){
      request.open("GET",this.selectedChartURL);
    //   console.log("album selected");
    } else {
    request.open("GET", url);
  }

    request.addEventListener("load", () => {
      if (request.status !== 200) return
      const jsonString = request.responseText;
      const musicObjects = JSON.parse(jsonString);
      this.setState({allMusic: musicObjects.feed.entry})
    });
    request.send()
  }

  handleChartSelected(url){
    this.setState({selectedChartURL: url})
  }

  render(){
    return(
      <div>
        <h1>iTunes Top 20</h1>
        <MusicSelect onChange={this.handleChartSelected}/>
        <MusicList music={this.state.allMusic} />
      </div>
    )
  }

}

export default Top20Box
