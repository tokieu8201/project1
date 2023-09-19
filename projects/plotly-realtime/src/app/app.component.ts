import { Component, OnInit } from '@angular/core';
import { layout } from './chart/layout';
import { config } from './chart/config';
import { data } from './chart/data';
import { dataPlotly } from './chart/trace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'plotly';

  public x: Date[] = [];
  public graph: { data: any[], layout: any, config: any } = { data: [], layout: {}, config: {} };

  constructor() {
  }

  ngOnInit(): void {
    this.graph = {
      data: dataPlotly,
      layout: layout,
      config: config
    }
    this.updateChart();
  }

  updateChart() {
    const currentTime = new Date();
    this.x.push(currentTime);
    
    data.yData.y1.push(Math.random());
    data.yData.y2.push(Math.random());
    data.yData.y3.push(Math.random());
    data.yData.y4.push(Math.random());
    data.yData.y5.push(Math.random());
    data.yData.y6.push(Math.random());
    data.yData.y7.push(Math.random());

    var olderTime = currentTime.setMinutes(currentTime.getMinutes() - 1);
    var futureTime = currentTime.setMinutes(currentTime.getMinutes() + 1);

    this.graph.layout.xaxis.range = [olderTime, futureTime];

    this.graph.data = [
      {
        x: this.x,
        y: data.yData.y1.slice(),
        mode: 'lines',
        line: {
          width: 0.6,
          color: 'yellow',
          shape: 'vh',
        }
      },
      {
        x: this.x,
        y: data.yData.y2.slice(),
        mode: 'lines',
        line: {
          width: 0.6,
          color: '#ff6600',
          shape: 'vh'
        },
      },
      {
        x: this.x,
        y: data.yData.y3.slice(),
        mode: 'lines',
        yaxis: 'y2',
        line: {
          width: 0.6,
          color: 'red',
          shape: 'vh'
        }
      },
      {
        x: this.x,
        y: data.yData.y4.slice(),
        yaxis: 'y2',
        mode: 'lines',
        line: {
          width: 0.6,
          color: 'violet',
          shape: 'vh'
        }
      },
      {
        x: this.x,
        y: data.yData.y5.slice(),
        yaxis: 'y2',
        mode: 'lines',
        line: {
          width: 0.6,
          color: '#0dffff',
          shape: 'vh'
        }
      },
      {
        x: this.x,
        y: data.yData.y6.slice(),
        yaxis: 'y2',
        mode: 'lines',
        line: {
          width: 0.6,
          color: '#9900cc',
          shape: 'vh'
        }
      },
      {
        x: this.x,
        y: data.yData.y7.slice(),
        yaxis: 'y2',
        mode: 'lines',
        line: {
          width: 0.6,
          color: '#3366ff',
          shape: 'vh'
        }
      }
    ],

    setTimeout(() => this.updateChart(), 1000);
  }
  
}

