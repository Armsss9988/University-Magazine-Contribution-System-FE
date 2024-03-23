import React from 'react';
import '../../css/styles.css';
import { BarChart } from '@mui/x-charts/BarChart';
import Footer from '../../../components/Footer';
import HeaderManger from "../../../components/HeaderManger";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Select from 'react-select';

function NumberOfMgz() {
    const dataset = [
        { month: 'Jan', london: 100, paris: 200, newYork: 250, seoul: 150 },
        // Add more data points here...
    ];

    const chartSetting = {
        height: 500, // Thêm chiều cao 300px
        width : 1000,
    };
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    const options = [
        { value: 'business', label: 'Business' },
        { value: 'graphic design', label: 'Graphic design'},
        { value: 'it', label: 'IT' },
      ];
    

    return (
        <div className='container'>
        <HeaderManger/>
        <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
        <div className='dropdown'>
        <h2 style={{ fontSize: "20px" }}>Majors</h2>
         <Select options={options} />
         </div>
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
        </div>
        <Footer/>
        </div>
    );
}

export default NumberOfMgz;