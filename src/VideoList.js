import React from "react"
import VideoListItem from "./VideoListItem"

const VideoList = (props) => {
  const displayVideoListItems = (videos) => {
    return videos.map(video => <VideoListItem handleClick={props.handleClick} video={video}/> )
  }

  return (
    <div>
      {displayVideoListItems(props.videos)}
    </div>
  )
}

export default VideoList
