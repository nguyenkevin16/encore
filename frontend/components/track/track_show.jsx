import React from 'react';
import { Link } from 'react-router';
import Comment from '../comments/comment';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handlePlay() {
    this.props.receivePlaybarData({
      track: this.props.track,
      display: true
    });
  }

  renderComments() {
    const { track, createComment } = this.props;

    const comments = track.comments.map(comment => {
      return (
        <Comment track={track}
          comment={comment}
          currentUser={this.props.currentUser}
          fetchTracks={this.props.fetchTracks}
          deleteComment={this.props.deleteComment}
          updateComment={this.props.updateComment}
          key={comment.id} />
      );
    });

    if (comments.length !== 0) {
      return(
        <div className='track-comments'>
          { comments }
        </div>
      );
    }
  }

  render() {
    const { track, createComment } = this.props;

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

        { this.renderComments() }
      </div>
    );
  }
}

export default TrackShow;
