import React, { Component } from 'react';
import Ball from './Ball.js';

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      style: {
        width: '100%',
        height: '750',
      },
      command: false,
      startX: Math.floor(Math.random() * 1920) + 1,
      startY: Math.floor(Math.random() * 740) + 1,
      y: 10,
      x: 500,
      batasBawahX: 0,
      batasAtasX: 1920,
      batasAtasY: 740

    }
    this.keyDownTextField = this.keyDownTextField.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyDownTextField);
  }
  keyDownTextField (e) {
    if (e.keyCode.toString() === '13') {
      console.log('ini enter');
    } else if (e.keyCode.toString() === '38') {
      console.log('ini atas')
    } else if (e.keyCode.toString() === '40') {
      console.log('ini bawah')
    } else if (e.keyCode.toString() === '13') {
      console.log('ini bukan enter')
    } else if (e.keyCode.toString() === '32') {
      console.log('ini Spasi')
      if (this.state.command) {
        this.setState({
          command: false
        })
      } else {
        this.setState({
          command: true
        })
      }
    } else {
      console.log('tidak ada perintah ini')
    }
  }
  counterX () {
    var looper = setTimeout(() => {
      if (this.state.x !== 0) {
        var x = this.state.x
        var y = this.state.y
        x--
        y++
        this.setState({
          x: x,
          y: y
        })
      } else if (this.state.x === 0) {
        var x = this.state.x
        var y = this.state.y
        this.setState({
          x: 0,
          y: y
        })
        y++
        x++
        this.setState({
          x: x,
          y: y
        })
      }
      console.log(this.state.x)
      if (!this.state.command) {
        clearInterval(looper)
      }
    }, 10)
  }
  counterY () {

  }
  render() {
    if (this.state.command) {
      this.counterX()
    }
    return (
      <div>
          <svg style={this.state.style}>
            <Ball x={this.state.x} y={this.state.y} />
          </svg>
      </div>
    );
  }
}
