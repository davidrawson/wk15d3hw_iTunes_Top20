import React from "react"

const MusicItem = (props) => {

  console.log(props);
  if (!props.artist) return null


  return (
    <p>{props.position}. "{props.title}" by {props.artist}</p>
  )
}

export default MusicItem
