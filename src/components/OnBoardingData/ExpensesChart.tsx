// @ts-nocheck
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Hosting Cost Per User', 'Payment Processing Fees', 'employee onboarding', 'rent', 'customer support cost'],
    datasets: [
        {
            data: [5051, 2525, 33, 33, 50],
            backgroundColor: [
                '#c98bd2',
                '#f4a623',
                '#ce801c',
                '#f8e71d',
                '#005683'
            ],
            borderColor: [
                '#c98bd2',
                '#f4a623',
                '#ce801c',
                '#f8e71d',
                '#005683'
            ],
            borderWidth: 1,
        },
    ],
};




export const options = {
    maintainAspectRatio: false,
    cutout: '60%',
    rotation: 360,
    plugins: {
        legend: {
            position: 'right',
        },
    }
}

export default function DoughNutChart() {
    return (
        <div className='p-4 rounded-xl shadow-lg bg-white'>
            <div><Doughnut
                data={data}
                options={options}
                height={350}
                width={385}
                />
            </div>
        </div>
    )
};
