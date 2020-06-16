import React from 'react'
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import { TimeSeries } from "pondjs";

// Data
const data = require("./usd_vs_euro.json");
const points = data.widget[0].data.reverse();
const series = new TimeSeries({
    name: "USD_vs_EURO",
    columns: ["time", "value"],
    points
});

const style = {
    value: {
        stroke: "#a02c2c",
        opacity: 0.2
    }
};

const baselineStyle = {
    line: {
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.4,
        strokeDasharray: "none"
    },
    label: {
        fill: "steelblue"
    }
};

const baselineStyleLite = {
    line: {
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.5
    },
    label: {
        fill: "steelblue"
    }
};

const baselineStyleExtraLite = {
    line: {
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.2,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "steelblue"
    }
};

class baselines extends React.Component {
    state = {
        tracker: null,
        timerange: series.range()
    };

    handleTrackerChanged = tracker => {
        this.setState({ tracker });
    };

    handleTimeRangeChange = timerange => {
        this.setState({ timerange });
    };

    render() {
        return (
          <ChartContainer timeRange={series.range()}>
          <ChartRow height="350">
              <YAxis
                  id="y"
                  min={min}
                  max={max}
                  width="60"
                  type="linear"/>
              <Charts>
                  <AreaChart
                      axis="y"
                      style={styler}
                      series={series}
                      columns={columns}
                      fillOpacity={0.4}
                      interpolation="curveBasis" />
              </Charts>
          </ChartRow>
      </ChartContainer>
        );
    }
}

// Export example
export default { baselines, baselines_docs, baselines_thumbnail };