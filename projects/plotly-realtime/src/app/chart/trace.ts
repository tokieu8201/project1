import { data } from "./data";

export const trace1 = {
    y: data.yData.y1,
    mode: 'lines',
    line: {
        width: 0.6,
        color: 'yellow',
        shape: 'vh',
    }
};

const trace2 = {
    y: data.yData.y2,
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#ff6600',
        shape: 'vh'
    },
};
const trace3 = {
    y: data.yData.y3,
    mode: 'lines',
    yaxis: 'y2',
    line: {
        width: 0.6,
        color: 'red',
        shape: 'vh'
    }
};
const trace4 = {
    y: data.yData.y4,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: 'violet',
        shape: 'vh'
    }
};
const trace5 = {
    y: data.yData.y5,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#0dffff',
        shape: 'vh'
    }
};
const trace6 = {
    y: data.yData.y6,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#9900cc',
        shape: 'vh'
    }
};
const trace7 = {
    y: data.yData.y7,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#3366ff',
        shape: 'vh'
    }
};

export const dataPlotly = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
