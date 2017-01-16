import React from 'react';

import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = this.props.user.tracks.map((track, i) => (
      <TrackIndexItem
        key={i}
        track={track}
        artist={this.props.user}
        deleteTrack={this.props.deleteTrack}/>
    ));

    return (
      <div className='track-index'>
        { tracks }
      </div>
    );
  }
}

export default TrackIndex;
