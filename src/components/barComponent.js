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
import { useSelector } from 'react-redux';

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
    const userLoginInfo = useSelector((store) => store?.user?.loginInfo)


    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: userLoginInfo !== null && [5, 10, 0, -5, -10],
                    label: 'Accepted',
                    borderColor: userLoginInfo == null ? "rgba(255,255,255,0.1)" : '#EC3E47',
                    backgroundColor: userLoginInfo == null ? "rgba(255,255,255,0.1)" : '#EC3E47',
                },
                {
                    data: userLoginInfo !== null && [6, -4, 2, -4, -2.8, 8.9],
                    label: 'Applied',
                    borderColor: userLoginInfo == null ? "rgba(255,255,255,0.1)" : '#0BBB70',
                    backgroundColor: userLoginInfo == null ? "rgba(255,255,255,0.1)" : '#0BBB70',
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
                    position: 'top',
                    width: "100%"
                },

            },
            maintainAspectRatio: false,
            responsive: false
        })
    }, [])

    return (
        <div className="w-100">
            <div className='bar-contain' style={{ width: "100%" }}>
                {/* <h6 className='text-white text-center pt-3'>Bar Component</h6> */}
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
export default BarComponent