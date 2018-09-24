import React from "react"

const VideoListItem = (props) => {
  return (
    <div onClick={() => props.handleClick(props.video)}>
      <img src={props.video.snippet.thumbnails.default.url} />
      <p>{props.video.snippet.title}</p>
    </div>
  )
}

export default VideoListItem
