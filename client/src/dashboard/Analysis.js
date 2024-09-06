import React from 'react';
import WorldFlag from 'react-world-flags';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    // Data for Bar Chart (Session Overview)
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Sessions',
                data: [30, 45, 60, 80, 55, 40, 70, 65],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // Data for Pie Chart (Device Views)
    const pieData = {
        labels: ['Series-1', 'Series-2', 'Series-3', 'Series-4'],
        datasets: [
            {
                label: 'Device Views',
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],
    };

    const pieData2 = {
        labels: ['Male', 'Female', 'Others'],
        datasets: [
            {
                label: 'Sessions By Gender',
                data: [25, 35, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],

    };
    const countries = [
        { name: 'United States', code: 'US', visitors: '32,190' },
        { name: 'Argentina', code: 'AR', visitors: '17,578' },
        { name: 'Germany', code: 'DE', visitors: '8,798' },
        { name: 'Mexico', code: 'MX', visitors: '16,885' },
        { name: 'Russia', code: 'RU', visitors: '10,118' },
        { name: 'Canada', code: 'CA', visitors: '1,678' },
        { name: 'Malaysia', code: 'MY', visitors: '6,578' },
    ];
    return (
        <div className="">
            <div className="p-4 flex justify-between items-center mt-14">
                <h1 className="text-2xl font-bold">Dashboard Analysis</h1>
            </div>

            <div id='scrollbar' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 overflow-y-scroll h-[550px]">
                {/* Header Components */}
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold">Total Sessions</h3>
                    <p className="text-3xl mt-2">1,289</p>
                    <p className="text-green-500 mt-1">+12.2% since last 2 months</p>
                </div>
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold">Bounce Rate</h3>
                    <p className="text-3xl mt-2">19.8%</p>
                    <p className="text-red-500 mt-1">-2.6% since last 2 months</p>
                </div>
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold">Page Views</h3>
                    <p className="text-3xl mt-2">15,250</p>
                    <p className="text-red-500 mt-1">-2.6% since last 2 months</p>
                </div>
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold">Active Users</h3>
                    <p className="text-3xl mt-2">12,890</p>
                    <p className="text-green-500 mt-1">+10.5% currently active now</p>
                </div>

                {/* Session Overview (Bar Chart) */}
                <div className="col-span-2 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Session Overview</h3>
                    <Bar data={barData} options={barOptions} />
                </div>

                {/* Device Views (Pie Chart) */}
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Device Views</h3>
                    <Pie data={pieData} />
                </div>

                {/* Traffic Sources */}
                <div className="bg-white p-4 shadow rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Visitors By Countries</h3>
                        <button className="text-blue-500 text-sm">View All</button>
                    </div>
                    <ul>
                        {countries.map((country, index) => (
                            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                                <div className="flex items-center">
                                    {/* Flag */}
                                    <WorldFlag code={country.code} className="w-6 h-4 mr-2" />
                                    {/* Country Name */}
                                    <span className="text-gray-700">{country.name}</span>
                                </div>
                                <span className="text-gray-700">{country.visitors}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sessions by Gender */}
                <div className="col-span-1 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Sessions By Gender</h3>
                    <Pie data={pieData2} />
                </div>

                {/* Audience Overview */}
                <div className="col-span-2 bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Audience Overview</h3>
                    <Bar
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    label: 'New Visitors',
                                    data: [50, 70, 80, 40, 60, 30, 50],
                                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                },
                                {
                                    label: 'Online Visitors',
                                    data: [40, 60, 70, 50, 45, 25, 60],
                                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                },
                            ],
                        }}
                        options={barOptions}
                    />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
