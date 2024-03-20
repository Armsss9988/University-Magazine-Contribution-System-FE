import React from 'react';
import '../css/styles.css';
import { BarChart } from '@mui/x-charts/BarChart';
import Footer from '../../components/Footer';
import HeaderManger from "../../components/HeaderManger";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function Dashboard() {
    const dataset = [
        { month: 'Jan', london: 100, paris: 200, newYork: 250, seoul: 150 },
        // Add more data points here...
    ];

    const chartSetting = {
        height: 300, // Thêm chiều cao 300px
        width : 400,
    };
    const data = [
        { 
            name: 'London',
            value: 30 ,
            
        },
        { 
            name: 'Paris', 
            value: 20 
        },
        { 
            name: 'Hanoi',
            value: 50     
        },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    

    return (
        <div className='container'>
        <HeaderManger/>
        <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
        <div className='dashboard'>
        
        <div className='barchart'>
        <BarChart
            dataset={dataset}
            xAxis={[
                {
                    scaleType: 'band',
                    dataKey: 'month',
                }
            ]}
            series={[
                {
                    dataKey: 'london',
                    label: 'London',
                    valueFormatter: (value) => `${value} mm`,
                },
                {
                    dataKey: 'paris',
                    label: 'Paris',
                    valueFormatter: (value) => `${value} mm`,
                },
                {
                    dataKey: 'newYork',
                    label: 'New York',
                    valueFormatter: (value) => `${value} mm`,
                },
                {
                    dataKey: 'seoul',
                    label: 'Seoul',
                    valueFormatter: (value) => `${value} mm`,
                },
                // Add more series here...
            ]}
            {...chartSetting}
        />
         </div>
         <div className='pie-chart'>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name }) => name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Dashboard;