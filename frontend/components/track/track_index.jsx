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
        user={this.props.user}
        currentUser={this.props.currentUser}
        deleteTrack={this.props.deleteTrack}
        receivePlaybarData={this.props.receivePlaybarData}/>
    ));

    return (
      <div className='track-index'>
        { tracks }
      </div>
    );
  }
}

export default TrackIndex;
