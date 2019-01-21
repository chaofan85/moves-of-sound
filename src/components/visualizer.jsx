import React, { Component } from "react";
import "./visualizer.css";

class Visualizer extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.drawBar = this.drawBar.bind(this);
  // }

  componentDidMount() {
    let obj = document.querySelector(".visualizer");
    let ctx = obj.getContext("2d");
    let centerX = obj.width / 2;
    let centerY = obj.height / 2;
    let radius = 70;

    // var gradient = ctx.createLinearGradient(0, 0, 0, obj.height);
    // gradient.addColorStop(0, "rgba(49, 121, 237, 1)");
    // gradient.addColorStop(1, "rgba(174, 216, 47, 1)");
    // ctx.fillStyle = gradient;
    // ctx.fillRect(0, 0, obj.width, obj.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
    ctx.stroke();

    let bars = 100;
    let radian = (Math.PI * 2) / bars;
    let barHeight = 150;
    let barWidth = 2;

    for (let i = 0; i < bars; i++) {
      let xStart = centerX + Math.cos(radian * i) * radius;
      let yStart = centerY + Math.sin(radian * i) * radius;
      let xEnd = centerX + Math.cos(radian * i) * (radius + barHeight);
      let yEnd = centerY + Math.sin(radian * i) * (radius + barHeight);

      let gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
      gradient.addColorStop(0, "rgba(42, 54, 186, 1)");
      gradient.addColorStop(1, "rgba(209, 28, 18, 1)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = barWidth;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();
    }
  }

  render() {
    return (
      <div>
        <canvas className="visualizer" width={500} height={500}>
          ha
        </canvas>
      </div>
    );
  }
}

export default Visualizer;
