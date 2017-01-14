import React from 'react';
import DiscoverItem from './discover_item';

class Discover extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const tracks = this.props.tracks.map((track, i) => (
      <DiscoverItem
        key={i}
        track={track}/>
    ));

    return (
      <div className='discover'>
        { tracks }
      </div>
    );
  }
}

export default Discover;
