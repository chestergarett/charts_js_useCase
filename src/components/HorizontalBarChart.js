import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';

const HorizontalBarChart = () => {

    return (
        <>
        <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        stack: 'stackA',
                        label: '# of votes',
                        data: [12,19,3,5,2,3],
                        backgroundColor: [
                            'red', 'blue', 'yellow', 'green', 'purple', 'orange'
                        ],
                        borderWidth: 1,
                        indexAxis: 'y',
                    },
                ]
            }}
            height={400}
            width={600}
            options={{
                title: {
                    display: true,
                    text: 'Test Title',
                },
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

export default HorizontalBarChart;