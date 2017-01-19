import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.hideAudio = this.hideAudio.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.renderTrackInfo = this.renderTrackInfo.bind(this);
    this.insertWaveform = this.insertWaveform.bind(this);
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

      let $duration = $('#duration');
      $duration.val(convertTime(duration));

      this.insertWaveform();
    }, false);

    music.addEventListener("timeupdate", timeUpdate, false);

    function timeUpdate() {
      let $currentTime = $('#currentTime');
      $currentTime.val(convertTime(music.currentTime));

      let playPercent = timelineWidth * (music.currentTime / duration);
      playhead.style.marginLeft = playPercent + "px";
      if (music.currentTime === duration) {
        playButton.className = "";
        playButton.className = "play";
      }
    }

    function convertTime(secs) {
      let minutes = Math.floor(secs / 60);
      let seconds = Math.floor(secs % 60);
      let minutesStr = `${minutes}`;
      let secondsStr = `${seconds}`;

      if (minutes < 10) {
        minutesStr = '0' + minutesStr;
      }
      if (seconds < 10) {
        secondsStr = '0' + secondsStr;
      }

      return `${minutesStr}:${secondsStr}`;
    }

    // Makes timeline clickable
    timeline.addEventListener("click", (event) => {
    	moveplayhead(event);
    	music.currentTime = duration * clickPercent(event);
    }, false);

    // returns click as decimal (.77) of the total timelineWidth
    function clickPercent(e) {
    	return (e.pageX - timeline.offsetLeft) / timelineWidth;
    }

    // Makes playhead draggable
    playhead.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    // Boolean value so that mouse is moved on mouseUp only when the
    // playhead is released
    var onplayhead = false;

    // mouseDown EventListener
    function mouseDown() {
    	onplayhead = true;
    	window.addEventListener('mousemove', moveplayhead, true);
    	music.removeEventListener('timeupdate', timeUpdate, false);
    }

    // mouseUp EventListener
    // getting input from all mouse clicks
    function mouseUp(e) {
    	if (onplayhead === true) {
    		moveplayhead(e);
    		window.removeEventListener('mousemove', moveplayhead, true);
    		// change current time
    		music.currentTime = duration * clickPercent(e);
    		music.addEventListener('timeupdate', timeUpdate, false);
    	}
    	onplayhead = false;
    }

    // mousemove EventListener
    // Moves playhead as user drags
    function moveplayhead(e) {
    	var newMargLeft = e.pageX - timeline.offsetLeft;
    	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    		playhead.style.marginLeft = newMargLeft + "px";
    	}
    	if (newMargLeft < 0) {
    		playhead.style.marginLeft = "0px";
    	}
    	if (newMargLeft > timelineWidth) {
    		playhead.style.marginLeft = timelineWidth + "px";
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
          <h5>
            { `${this.props.track.title} - ${this.props.track.user.username}` }
          </h5>
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

  insertWaveform() {
    let audioUrl = this.props.track.track_url;
    let insertIdx = audioUrl.indexOf('upload/') + 7;
    let endIdx = audioUrl.indexOf('.mp3');
    let insertUrl = 'h_30,w_325,fl_waveform,co_black,b_none/';

    let waveform = (
      audioUrl.slice(0, insertIdx)
      + insertUrl
      + audioUrl.slice(insertIdx, endIdx)
      + '.png'
    );

    console.log(waveform);

    let $timeline = $('#timeline');
    $timeline.css({
      'background': `url('${waveform}')`,
      'background-repeat': 'no-repeat',
      'background-size': 'contain'
    });
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

          <div id="time">
            <input type='text'
              id="currentTime"
              disabled/>
            { '/' }
            <input type='text'
              id="duration"
              disabled/>
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
