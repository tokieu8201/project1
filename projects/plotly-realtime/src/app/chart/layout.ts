
export const layout = {
  title: 'plotly chart',
  plot_bgcolor: '#111d27',
  paper_bgcolor: "#262626",
  font: {
    color: '#a6a6a6'
  },
  xaxis: {
    domain: [0.1, 1],
    showgrid: false,
    tickmode: 'linear',
    dtick: 10000,
    ticklen: 10,
    minor: {
      ticklen: 5,
    },
    color: 'a6a6a6',
    type: 'date',
    tickformat: '%H:%M:%S',
    position: 0.035,
  },

  yaxis: {
    domain: [0.1, 1],
    range: [0, 30],
    side: 'left',
    position: 0.07,
    zeroline: false,
    showgrid: false,
    tickangle: -90,
    tickvals: Array.from({ length: 31 }, (_, index) => index),
    ticktext: Array.from({ length: 31 }, (_, index) => {
      if (index === 0 || index === 30) {
        return index
      } else {
        return ''
      }
    }),
    ticklen: 10,
    minor: {
      ticklen: 5,
      nticks: 15,
    },
    tick0: 0,
    dtick: 1,
    tickwidth: 0.6,
    color: 'a6a6a6',
  },

  yaxis2: {
    domain: [0.1, 1],
    range: [0, 5],
    showgrid: false,
    overlaying: 'y',
    side: 'left',
    position: 0.03,
    tickwidth: 0.6,
    tickangle: -90,
    zeroline: false,
    color: 'a6a6a6',
    tickmode: 'array',
    tickvals: Array.from({ length: 26 }, (_, index) => index * 0.2),
    ticktext: Array.from({ length: 26 }, (_, index) => {
      if (index === 0 || index === 25) {
        return index * 0.2;
      } else {
        return '';
      }
    }),
    ticklen: 10,
    minor: {
      ticklen: 5,
      nticks: 12,
    },
  },

  shapes: [
    {
      //shape trace 1
      type: 'rect',
      xref: 'paper',
      yref: 'y',
      x0: 0.052,
      x1: 0.059,
      y0: 2,
      y1: 3.2,
      fillcolor: 'yellow',
      line: {
        width: 0,
      },
    },
    //shape trace 2
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y',
      x0: 0.052,
      x1: 0.059,
      y0: 4.2,
      y1: 5.4,
      fillcolor: '#ff6600',
      line: {
        width: 0
      },
    },
    //shape trace 3
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y2',
      x0: 0.012,
      x1: 0.019,
      y0: 0.3,
      y1: 0.5,
      fillcolor: 'red',
      line: {
        width: 0,
      },
    },
    //shape trace 4
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y2',
      x0: 0.012,
      x1: 0.019,
      y0: 0.7,
      y1: 0.9,
      fillcolor: 'violet',
      line: {
        width: 0,
      },
    },
    //shape trace 5
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y2',
      x0: 0.012,
      x1: 0.019,
      y0: 1.12,
      y1: 1.32,
      fillcolor: '#0dffff',
      line: {
        width: 0,
      },
    },
    //shape trace 6
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y2',
      x0: 0.012,
      x1: 0.019,
      y0: 1.52,
      y1: 1.72,
      fillcolor: '#9900cc',
      line: {
        width: 0,
      },
    },
    //shape trace 7
    {
      type: 'rect',
      xref: 'paper',
      yref: 'y2',
      x0: 0.012,
      x1: 0.019,
      y0: 1.92,
      y1: 2.12,
      fillcolor: '#3366ff',
      line: {
        width: 0,
      },
    },
    //
    {
      type: 'path',
      path: 'M 0.18,0.05 L0.176,0.07 L0.18,0.09 L0.184,0.07 Z',
      fillcolor: 'white',
      line: {
        width: 0
      },
      xref: 'paper',
      yref: 'paper',
    },
    {
      type: 'path',
      path: 'M 0.94,0.05 L0.936,0.07 L0.94,0.09 L0.944,0.07 Z',
      fillcolor: 'white',
      line: {
        width: 0
      },
      xref: 'paper',
      yref: 'paper',
    },
    {
      type: 'path',
      path: 'M 0.99,0.05 L0.986,0.07 L0.99,0.09 L0.994,0.07 Z',
      fillcolor: 'white',
      line: {
        width: 0
      },
      xref: 'paper',
      yref: 'paper',
    }
  ],

  // annotations: [
  //   {
  //     // x: '22:13:16',
  //     y: 0.05,
  //     xref: 'x',
  //     yref: 'paper',
  //     showarrow: false,
  //     text: '  7  ',
  //     align: 'center',
  //     bordercolor: 'white',
  //     bgcolor: 'white',
  //     font: {
  //       size: 7,
  //       color: 'black'
  //     }
  //   },
  //   {
  //     // x: '02:10:37',
  //     y: 0.05,
  //     xref: 'x',
  //     yref: 'paper',
  //     showarrow: false,
  //     text: '  2  ',
  //     align: 'center',
  //     bordercolor: 'white',
  //     bgcolor: 'white',
  //     font: {
  //       size: 7,
  //       color: 'black'
  //     },
  //   },
  //   {
  //     // x: '03:10:44',
  //     y: 0.05,
  //     xref: 'x',
  //     yref: 'paper',
  //     showarrow: false,
  //     text: '  2  ',
  //     align: 'center',
  //     bordercolor: 'white',
  //     bgcolor: 'white',
  //     font: {
  //       size: 7,
  //       color: 'black'
  //     },
  //   },
  //   {
  //     // x: '04:55:50',
  //     y: 0.05,
  //     xref: 'x',
  //     yref: 'paper',
  //     showarrow: false,
  //     text: '  2  ',
  //     align: 'center',
  //     bordercolor: 'white',
  //     bgcolor: 'white',
  //     font: {
  //       size: 7,
  //       color: 'black'
  //     },
  //   },
  // ]
}