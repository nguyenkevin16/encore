import React from 'react';
import TrendingItem from './trending_item';

class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = this.props.tracks.map((track, i) => (
      <TrendingItem
        key={i}
        track={track}
        receivePlaybarData={this.props.receivePlaybarData}/>
    ));

    return (
      <div className='trending'>
        <h1>Sample tracks</h1>
        <p>Try it out! Just click on an image below.</p>
        <div className='trending-subcontainer'>
          { tracks }
        </div>
      </div>
    );
  }
}

export default Trending;
