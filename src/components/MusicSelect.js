import React, { Component } from "react"

class MusicSelect extends Component{

  constructor (props){
    super (props)

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
    console.log(event.target.value);
    this.props.onChange(event.target.value)
  }

  render(){

    return (
      <select id="chart-select" onChange={this.handleChange}>
        <option disabled>Choose a chart...</option>
        <option key="1" value="https://itunes.apple.com/gb/rss/topsongs/limit=20/json">Singles Top 20</option>
        <option key="2" value="https://rss.itunes.apple.com/api/v1/gb/apple-music/top-albums/all/20/explicit.json">Albums Top 20</option>
      </select>
    )


  }
}


export default MusicSelect
