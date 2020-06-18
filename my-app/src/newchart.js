import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

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
    }
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
        
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "customer",
                    fill: true,
                    pointRadius: 0,
                    data: values
                }
            ]
        };
        this.setState({data: data});
        });
    }

    render() {
        if (this.state.data) {
            return (
                <div>
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

