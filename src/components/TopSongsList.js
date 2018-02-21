import React from 'react';
import TopSongsDetail from '../components/TopSongsDetail';

const TopSongsList = (props) => {

  let songsList = props.topSongs.map((song, index) => {
    return (
      <TopSongsDetail
        key={index}
        img={song['im:image']}
        position={index+1}
        title={song['im:name'].label}
        artist={song['im:artist'].label} />
    )
  })

  return (
    <table>
      <thead>
        {songsList}
      </thead>
    </table>
  )
};

export default TopSongsList;
