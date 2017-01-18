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

    const comments = track.comments.map(comment => {
      return (
        <div className='comment' key={comment.id}>
          <h4> { comment.body } </h4>
          <h4> { ` - ${comment.username}` }</h4>
        </div>
      );
    });

    const renderComments = () => {
      if (comments.length !== 0) {
        return(
          <div className='track-comments'>
            { comments }
          </div>
        );
      }
    };

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

        { renderComments() }
      </div>
    );
  }
}

export default TrackShow;
