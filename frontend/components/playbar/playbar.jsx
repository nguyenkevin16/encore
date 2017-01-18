import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      music: document.getElementById('music'),
      playButton: document.getElementById('playButton'),
      playHead: document.getElementById('playhead'),
    });
  }

  renderAudio() {
    if (this.props.display === true) {
      return (
        <source src={ this.props.track.track_url } type='audio/mpeg'/>
      );
    } else {
      return;
    }
  }

  renderInfo() {
    if (this.props.track) {
      return (
        <div id="track-info">
          <img src={this.props.track.img_url}/>
          <h5>{ `${this.props.track.title} - ${this.props.track.user.username}` }</h5>
        </div>
      );
    } else {
      return (
        <div id="track-info"></div>
      );
    }
  }

  handleAudio() {
    if (this.state !== null) {
      this.state.music.load();
      this.state.music.autoplay = true;
      this.state.playButton.className = "";
      this.state.playButton.className = "pause";
    }
  }

  playAudio() {
    if (this.state !== null) {
      if (this.state.music.paused) {
    		this.state.music.play();
    		this.state.playButton.className = "";
    		this.state.playButton.className = "pause";
    	} else {
    		this.state.music.pause();
    		this.state.playButton.className = "";
    		this.state.playButton.className = "play";
    	}
    }
  }

  render() {
    console.log(this.state);

    return (
      <div id='audioplayer'>
        { this.renderInfo() }

        <button id="playButton"
          className="play"
          onClick={ this.playAudio }></button>

        <div id="timeline">
          <div id="playhead"></div>
        </div>

        <audio id="music" preload="true">
          { this.renderAudio() }
          { this.handleAudio() }
        </audio>
      </div>
    );
  }
}

export default Playbar;
