import React from "react"

const CurrentVideoDisplay = (props) => {
  const embedUrl = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    <div>
    <iframe src={embedUrl} />
    <p>{props.selectedVideo.snippet.description}</p>
    </div>
  )
}

export default CurrentVideoDisplay
