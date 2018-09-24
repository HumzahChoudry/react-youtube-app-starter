import React, { Component } from 'react'

  class SearchBar extends Component {

    state = {
      searchTerm: ''
    }

    handleChange = (e) => {
      if (e.target.value !== "humzah"){
      this.setState({
        searchTerm: e.target.value
      })
      this.props.searchVideos(e.target.value)
    }
    }

      render() {
      return (
        <div className='SearchBar'>
          <input value={this.state.searchTerm} onChange={this.handleChange} type="text" id="current-search" placeholder="search youtube" />
        </div>
      )
    }
  }

export default SearchBar;
