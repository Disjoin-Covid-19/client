import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';


async function extract() {
    const data = await fetch('/data');
    return await data.json();
};

const options = {
    responsive: true,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            type: 'time',
            ticks: {
                padding: -5,
                autoSkip: true,
                maxTicksLimit: 4,
                maxRotation: 0,
                minRotation: 0
            },
            time: {
                unit: 'hour'
            },
            gridLines: {
                display:false
            },
            display: true
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
            },
            gridLines: {
                display:false
            },
            display: false
        }]
    },
    zoom: {
        enabled: true,
        mode: 'x',
    },
    pan: {
        enabled: true,
        mode: 'x',
    },
};

export default class Chart extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        let labels = [];
        let values = [];
        extract().then((raw)=>{
            raw.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            raw.map(d => {
                const date = new Date(d.date);
                labels.push(date);
                values.push(d.customerct);
            });
            const data = (canvas) => {
                const ctx = canvas.getContext("2d");
                const grd = ctx.createLinearGradient(0,0,ctx.canvas.clientWidth,0);
                grd.addColorStop(0, "#fec8dc");
                grd.addColorStop(1, "#c5dffc");
                return {
                    labels: labels,
                    datasets: [
                        {
                            label: "customer",
                            fill: true,
                            backgroundColor: grd,
                            borderWidth: 0,
                            pointRadius: 0,
                            data: values
                        }
                    ]
                }
            };
            this.setState({data: data});
        });
    }

    render() {
        if (this.state.data) {
            return (
                <div style={{"padding": "5%"}}>
                    <Line
                    data={this.state.data}
                    options={options}
                    />
                </div>
              );
        }
        else {
            return null;
        }
    }
}

