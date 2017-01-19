import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
    };

    this.playAudio = this.playAudio.bind(this);
    this.hideAudio = this.hideAudio.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.renderTrackInfo = this.renderTrackInfo.bind(this);
  }

  componentDidMount() {
    const music = document.getElementById('music');
    const playButton = document.getElementById('playButton');
    const playhead = document.getElementById('playhead');
    const timeline = document.getElementById('timeline');
    let duration;

    let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

    music.addEventListener('loadedmetadata', () => {
	    duration = music.duration;
    }, false);

    music.addEventListener("timeupdate", timeUpdate, false);

    function timeUpdate() {
      let playPercent = timelineWidth * (music.currentTime / duration);
      playhead.style.marginLeft = playPercent + "px";
      if (music.currentTime === duration) {
        playButton.className = "";
        playButton.className = "play";
      }
    }
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

  renderTrackInfo() {
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
    const music = document.getElementById('music');
    const playButton = document.getElementById('playButton');

    if (music) {
      music.load();
      playButton.className = "";
      playButton.className = "pause";
    }
  }

  playAudio() {
    const music = document.getElementById('music');
    const playButton = document.getElementById('playButton');

    if (music.paused) {
  		music.play();
  		playButton.className = "";
  		playButton.className = "pause";
  	} else {
  		music.pause();
  		playButton.className = "";
  		playButton.className = "play";
  	}
  }

  hideAudio(e) {
    e.preventDefault();
    const music = document.getElementById('music');
    music.pause();
    this.props.receivePlaybarData({ display: false });
  }

  render() {
    return (
      <div id='audioplayer'>
        { this.renderTrackInfo() }

        <div id='audiomiddle'>
          <div id='audiocontrols'>
            <button id="playButton"
              className="pause"
              onClick={ this.playAudio }></button>
          </div>

          <div id="timeline">
            <div id="playhead"></div>
          </div>

          <div id='timeleft'>
            { this.timeleft() }
          </div>
        </div>

        <div id='playbar-right'>
          <button id="stopButton"
            className="stop"
            onClick={ this.hideAudio }></button>
        </div>

        <audio id="music" preload="true" autoPlay>
          { this.renderAudio() }
          { this.handleAudio() }
        </audio>
      </div>
    );
  }
}

export default Playbar;
