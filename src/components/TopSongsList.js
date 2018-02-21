import React from 'react';
import TopSongsDetail from '../components/TopSongsDetail';

const TopSongsList = (props) => {

  let songsList = props.topSongs.map((song, index) => {
    return (
      <TopSongsDetail key={index} img={song['im:image']} position={index} title={song['im:name'].label} artist={song['im:artist'].label} />
    )
  })

  return <div>{songsList}</div>
};

export default TopSongsList;
