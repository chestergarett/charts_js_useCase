import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    
    return (
        <>
        <Line
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [12,19,3,5,2,3],
                        backgroundColor: [
                            'red', 'blue', 'yellow', 'green', 'purple', 'orange'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Quantity',
                        data: [10, 14, 67, 59, 9, 50],
                        backgroundColor: 'orange',
                    }
                ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            }}
        />
        </>
    )
}

export default LineChart;