import React from 'react';

function Track({item, index}) {
  const link = item.id.label,
        artist = item['im:artist'].label,
        name = item['im:name'].label,
        price = item['im:price'].label,
        image = item['im:image'][2].label;

  return (
    <li className="main-list-track">
      <a className="track-link" href={link} target="_black">
        <img className="track-image" src={image} alt={artist}/>
      </a>
      <p className="track-artist">{index + 1}. {artist}</p>
      <p className="track-name">{name}</p>
      <p className="track-price">{price}</p>
    </li>
  );
}

export default Track;
