import React from 'react';
import { Link } from 'react-router';
import Comment from '../comments/comment';
import { merge } from 'lodash';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handlePlay() {
    this.props.receivePlaybarData({
      track: this.props.track,
      display: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(
      merge({}, this.state, {track_id: this.props.track.id})
    );
    this.props.fetchTracks();
  }

  update(property) {
    return e => (this.setState({ [property]: e.target.value }));
  }

  renderForm() {
    if (this.props.currentUser) {
      return (
        <form className='comment-form'
          onSubmit={ this.handleSubmit }>

          <textarea onChange={ this.update('body') }></textarea>

          <button>Add Comment</button>
        </form>
      );
    }
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
        { this.renderForm() }
      </div>
    );
  }
}

export default TrackShow;
