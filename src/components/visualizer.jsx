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
    var centerX = obj.width / 2;
    var centerY = obj.height / 2;
    var radius = 70;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
    ctx.stroke();

    let bars = 150;

    for (let i = 0; i < bars; i++) {
      console.log(xStart, xEnd, yStart, yEnd);
      
      let radian = (Math.PI * 2) / bars;
      let barHeight = 100;
      let barWidth = 1;
      let xStart = centerX + Math.cos(radian * i) * radius;
      let yStart = centerY + Math.sin(radian * i) * radius;
      let xEnd = centerX + Math.cos(radian * i) * (radius + barHeight);
      let yEnd = centerY + Math.sin(radian * i) * (radius + barHeight);

      ctx.strokeStyle = "purple";
      ctx.lineWidth = barWidth;
      ctx.beginPath();
      ctx.moveTo(xStart, xEnd);
      ctx.lineTo(yStart, yEnd);
      ctx.stroke();
    }
  }

  // drawBar(x1, x2, y1, y2, width) {
    
  // }

  render() {
    return (
      <div>
        <canvas className="visualizer" width={400} height={400}>
          ha
        </canvas>
      </div>
    );
  }
}

export default Visualizer;
