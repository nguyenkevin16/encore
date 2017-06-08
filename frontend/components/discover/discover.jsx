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
        track={track}
        receivePlaybarData={this.props.receivePlaybarData}/>
    ));

    return (
      <div className='discover'>
        <div className='discover-container'>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1496899161/blown-away_axrkgr.jpg'></img>
          <div className='discover-message'>
            <h1>Discover</h1>
            <p>Discover new music below.<br/>
            Try it out!</p>
          </div>
        </div>
        
        <div className='discover-tracks'>
          { tracks }
        </div>
      </div>
    );
  }
}

export default Discover;
