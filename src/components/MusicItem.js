import React from "react"

const MusicItem = (props) => {

  console.log(props);
  if (!props.artist) return null


  return (
    <div>
      <p>{props.position}. "{props.title}" by {props.artist}</p>
      <img src={props.imageSRC}></img>
    </div>
  )
}

export default MusicItem
