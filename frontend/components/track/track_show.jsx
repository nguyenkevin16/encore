import React from 'react';
import { Link } from 'react-router';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.props.receivePlaybarData({
      track: this.props.track,
      display: true
    });
  }

  render() {
    const { track } = this.props;

    return (
      <div className='track-show'>
        <div className='track-show-subcontainer'>
          <img src={ track.img_url }/>
          <div className='track-show-overlay' onClick={ this.handlePlay }/>

          <div className='track-show-details'>
            <h3>{ track.title }</h3>

            <Link to={`users/${track.user.id}`}>
              <h4>{ track.user.username }</h4>
            </Link>

            <h5>{ track.description }</h5>
          </div>
        </div>

        <div className='track-comments'>
          Comments go here!
        </div>
      </div>
    );
  }
}

export default TrackShow;
