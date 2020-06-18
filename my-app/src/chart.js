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


import React from "react";
import "./styles.css";

import { Line } from "react-chartjs-2";

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


const data = extract();
console.log(data);
extract().then((data)=>{
  console.log(data);
  const x = data.map(d => {
    const date = new Date(d.date);
    return { ...d, date };
  });
  //.sort((a, b) => b.date - a.date);
})


class Chart extends Component{
  state = {
    data: data,
    labels: yearLabels
  }

  static defaultProps = {
    displayTitle:true
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;

constructor(){
  super();
  this.state = {
    chartData:{}
  }
}

componentWillMount(){
  this.getchartData();
}

getChartData(){
  // Ajax calls here
  this.setState({
    chartData:{
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label:'Population',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }
  });
}

render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
    </div>
  );
}
}