import React, {Component} from 'react';
import AppTitle from '../components/AppTitle'
import TopSongsList from '../components/TopSongsList'

class MusicBox extends Component {
  constructor() {
    super();
    this.state = {
      topSongs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const songs = JSON.parse(request.responseText)
      this.setState({ topSongs: songs.feed.entry})
    })
    request.send();

  }

  render(){
    console.log(this.state.topSongs);
    return (
      <div>
        <AppTitle/>
        <TopSongsList topSongs={this.state.topSongs}/>
      </div>
    );
  }
}

export default MusicBox;
