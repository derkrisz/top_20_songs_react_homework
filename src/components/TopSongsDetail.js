import React from 'react';

const TopSongsDetail = (props) => {

  return (
    <div>
      <img src={props.img[0].label} alt={props.artist}/>
      <p>{props.position}. {props.title} {props.artist}</p>
    </div>
  )
};

export default TopSongsDetail;
