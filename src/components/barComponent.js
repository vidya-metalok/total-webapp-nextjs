import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import {
    Chart as chartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

chartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarComponent = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [5, 10, 0, -5, -10],
                    label: 'Accepted',
                    borderColor: '#EC3E47',
                    backgroundColor: '#EC3E47',
                },
                {
                    data: [6, -4, 2, -4, -2.8, 8.9, 5],
                    label: 'Applied',
                    borderColor: '#0BBB70',
                    backgroundColor: '#0BBB70',
                }
            ]
        })
        setChartOptions({
            scales: {
                x: {
                    grid: {
                        color: "#383748"
                    }


                },
                y: {
                    grid: {
                        color: "#383748"

                    },
                    ticks: {
                        callback: (value) => `${value}k`
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },

            },
            maintainAspectRatio: false,
            responsive: false
        })
    }, [])

    return (
        <>
            <div className='bar-contain'>
                {/* <h6 className='text-white text-center pt-3'>Bar Component</h6> */}
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}
export default BarComponent