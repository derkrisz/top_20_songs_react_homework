import React from 'react';

const TopSongsDetail = (props) => {

  return (
    <tr>
      <td>{props.position}</td>
      <td><img src={props.img[0].label} alt={props.artist}/></td>
      <td>{props.artist} <br /> {props.title}</td>
    </tr>
  )
};

export default TopSongsDetail;
