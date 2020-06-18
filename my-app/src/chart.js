import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import { curveCatmullRom, area } from "d3-shape";


// Data
async function extract() {
  const data = await fetch('/data');
  return await data.json();
};

const data = extract();
console.log(data);
extract().then((data)=>{
  console.log(data);
  const x = data.map(d => {
    const date = new Date(d.date);
    return { ...d, date };
  })
  .sort((a, b) => b.date - a.date);
})

const Area = props => (
  <AreaSeries.Path
    {...props}
    path={area()
      .x(({ arg }) => arg)
      .y1(({ val }) => val)
      .y0(({ startVal }) => startVal)
      .curve(curveCatmullRom)}
  />
);

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries 
            valueField="customerct"
            argumentField="date" 
            seriesComponent={Area}/>
          <ZoomAndPan />
        </Chart>
      </Paper>
    );
  }
}