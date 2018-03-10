import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';
import sound from './sound.ogg';
import sound_gold from './sound_gold.ogg';

//Probability of getting a golden = 1/max
const max = 12;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      images: [],
      sounds: []
    };
  }

  createImage() {

    let imageURL = require('./normal.png');
    let soundURL = sound;
    let rand = Math.floor((Math.random() * (max)));
    if (rand === 0) {
      imageURL = require('./gold.png');
      soundURL = sound_gold;
    }

    this.setState({
      images: this.state.images.concat(
        <img
          key={this.state.images.length}
          style={{
            position: "absolute",
            left: this.state.x - 150,
            top: this.state.y - 200,
            "pointerEvents": "none",
          }} src={imageURL} ></img>),
      sounds: this.state.sounds.concat(
        <ReactPlayer
          key={this.state.sounds.length}
          width='0%'
          height='0%'
          playing
          config={{ file: { forceAudio: true } }}
          url={soundURL} />)
    });
  }

  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  }

  render() {
    return (
      <div
        style={{ height: "100vh", width: "100", cursor: "pointer" }}
        onClick={this.createImage.bind(this)}
        onMouseMove={this._onMouseMove.bind(this)} >
        {this.state.images}
        {this.state.sounds}
      </div>

    );
  }
}

export default App;
