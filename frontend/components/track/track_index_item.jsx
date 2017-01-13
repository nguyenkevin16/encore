import React from 'react';

const TrackIndexItem = ({ track, artist }) => (
  <div className='track-index-item'>
    <label>Title: { track.title }</label>
    <label>Artist: { artist.username }</label>
    <label>Description: { track.description }</label>
    <label>img_url: { track.img_url }</label>
    <label>Track_Url: { track.track_url }</label>
  </div>
);

export default TrackIndexItem;
