import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.hideAudio = this.hideAudio.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  componentDidMount() {
    this.setState({
      music: document.getElementById('music'),
      playButton: document.getElementById('playButton'),
      playHead: document.getElementById('playhead'),
      timeline: document.getElementById('timeline'),
    });
  }

  componentWillReceiveProps() {
    this.setState({
      music: document.getElementById('music'),
      playButton: document.getElementById('playButton'),
      playHead: document.getElementById('playhead'),
      timeline: document.getElementById('timeline'),
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

  hideAudio(e) {
    e.preventDefault();
    this.state.music.pause();
    this.props.receivePlaybarData({ display: false });
  }

  render() {
    return (
      <div id='audioplayer'>
        { this.renderInfo() }

        <div id='audiocontrols'>
          <button id="playButton"
            className="play"
            onClick={ this.playAudio }></button>

          <button id="stopButton"
            className="stop"
            onClick={ this.hideAudio }></button>
        </div>

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
