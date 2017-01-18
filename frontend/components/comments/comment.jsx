import React from 'react';
import { Link } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(commentId) {
    return (e) => {
      e.preventDefault();

      this.props.deleteComment(commentId);
      this.props.fetchTracks();
    };
  }

  render() {
    const { track, currentUser, comment } = this.props;

    const renderButtons = () => {
      if (currentUser) {
        if (currentUser.username === track.user.username) {
          return (
            <button onClick={ this.deleteComment(comment.id) }>Delete Comment</button>
          );
        }
      }
    };

    return (
      <div className='comment' key={comment.id}>
        <h4> { comment.body } </h4>
        <h4> { ` - ${comment.username}` }</h4>

        { renderButtons(comment) }
      </div>
    );
  }
}

export default Comment;
