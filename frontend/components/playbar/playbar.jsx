import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderAudio = this.renderAudio.bind(this);
  }

  renderAudio() {
    if (this.props.display === true) {
      return (
        <audio controls>
          <source src={ this.props.track_url } type='audio/mpeg'/>
        </audio>
      );
    } else {
      return;
    }
  }

  render() {
    console.log(this.props.track_url);

    return (
      <div className='playbar'>
        { this.renderAudio() }
      </div>
    );
  }
}

export default Playbar;
