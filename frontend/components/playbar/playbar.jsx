import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAudio() {
    if (this.props.display === true) {
      return (
        <source src={ this.props.track_url } type='audio/mpeg'/>
      );
    } else {
      return;
    }
  }

  handleAudio() {
    if (this.props.display === true) {
      let audio = document.getElementById('playbar');
      audio.load();
      audio.autoplay = true;
    }
  }

  render() {
    return (
      <div className='playbar'>
        <audio controls id='playbar'>
          {
            this.renderAudio()
          }
          {
            this.handleAudio()
          }
        </audio>
      </div>
    );
  }
}

export default Playbar;
