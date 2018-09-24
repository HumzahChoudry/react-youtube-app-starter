import React, { Component } from 'react'
import VideoList from "./VideoList"
import CurrentVideoDisplay from "./CurrentVideoDisplay"
import SearchBar from "./SearchBar"
import keys from "./keys"

  class YoutubeContainer extends Component {

    state = {
      videos: null,
      selectedVideo: null
    }

    componentDidMount = () => {
      this.fetchVideos("dogs")
    }

    changeSelectedVideo = (newSelectedVideo) => {
      console.log("before change", this.state.selectedVideo.id.videoId);
      this.setState({
        selectedVideo: newSelectedVideo
      })
    }

    fetchVideos = (term) => {
      if (term == undefined){
        term = "dogs"
      }
      //write out our fetch for youtube using term
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${term}&type=video`)
        .then(res => res.json())
        .then(data => {
          this.addVideoToState(data)
        })
    }

    addVideoToState = (data) => {
      this.setState({
        videos: data.items,
        selectedVideo: data.items[0]
      })
    }

      render() {
      return (
        <div className='YoutubeContainer'>
          <SearchBar searchVideos={this.fetchVideos} />
          {this.state.selectedVideo ? <CurrentVideoDisplay selectedVideo={this.state.selectedVideo}/>: <p>Loading</p>}
          {this.state.videos ? <VideoList handleClick={this.changeSelectedVideo} videos={this.state.videos.filter(video =>
            video.id.videoId !==  this.state.selectedVideo.id.videoId
          )}/> : <p>Loading</p>}
        </div>
      )
    }
  }

export default YoutubeContainer;
