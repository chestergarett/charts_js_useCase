import React, { Component } from 'react';
import Highcharts from 'highcharts';
import addTreemapModule from 'highcharts/modules/treemap';
import {
  HighchartsChart, HighchartsProvider, Title, XAxis, YAxis, TreemapSeries, Legend
} from 'react-jsx-highcharts';

const colorAxis = {
  minColor: '#FFFFFF',
  maxColor: Highcharts.getOptions().colors[0]
};

addTreemapModule(Highcharts);

class TreeMapChartV2 extends Component {

  constructor (props) {
    super(props);

    this.state = {
      treemapData: [
        { name: 'A', value: 6, color: 'blue' },
        { name: 'B', value: 6, color: 'black' },
        { name: 'C', value: 4, color: 'white' },
        { name: 'D', value: 3, color: 'yellow' },
        { name: 'E', value: 2, color: 'green' },
        { name: 'F', value: 2, color: 'red' },
        { name: 'G', value: 1, color: 'white' }
      ]
    };
  }

  render () {
    const treemapData = this.state.treemapData;

    return (
      <div className="app">
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart colorAxis={colorAxis}>
                    <Title>Highcharts Treemap</Title>

                    <Legend />

                    <XAxis />

                    <YAxis>
                        <TreemapSeries name="Tree" data={treemapData} layoutAlgorithm="squarified" />
                    </YAxis>
                </HighchartsChart>
            </HighchartsProvider>
      </div>
    );
  }
}

export default TreeMapChartV2;