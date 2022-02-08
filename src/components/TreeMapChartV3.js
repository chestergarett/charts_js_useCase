import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import colorAxis from 'highcharts/modules/coloraxis';


const data = {
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [
            {
                name: 'A',
                value: 15,
                color: 'blue',
            }, 
            {
                name: 'B',
                value: 6,
                color: 'black',
            }, 
            {
                name: 'C',
                value: 20,
                color: 'gray',
            }, 
            {
                name: 'D',
                value: 8,
                color: 'green',
            }, 
            {
                name: 'E',
                value: 11,
                color: 'yellow',
            }, 
            {
                name: 'F',
                value: 15,
                color: 'orange',
            }, 
            {
                name: 'G',
                value: 12,
                colorValue: 7,
            }, 
    ]
    }],
}

const TreeMapChartV3 = () => {

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={data}
        />
    )
}

export default TreeMapChartV3;