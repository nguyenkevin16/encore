import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteTrack(this.props.track.id);
  }


  render() {
    const { track, artist, deleteTrack } = this.props;

    return (
      <div className='track-index-item'>
        <p className='track-index-item-img'>
          <label>img_url: { track.img_url }</label>
        </p>

        <div className='track-index-item-details'>
          <label>Title: { track.title }</label>
          <label>Artist: { artist.username }</label>
          <label>Description: { track.description }</label>
          <label>Track_Url: { track.track_url }</label>

          <button onClick={ this.handleDelete }>Delete Track</button>
        </div>
      </div>
    );
  }
}

export default TrackIndexItem;
