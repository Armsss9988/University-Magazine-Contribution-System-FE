import '../../css/styles.css';
import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Footer from '../../../components/Footer';
import HeaderManger from "../../../components/HeaderManger";
import { dashboardAPI } from '../../../api/api';
import Select from 'react-select';

function NumberOfStudents() {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const {data} = await dashboardAPI.contributors();
        setContributors(data);
        console.log(data);
      }
    const dataset = [
        {contributors,faculty : "faculty"}
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
        <h2 style={{ fontSize: "20px" }}>Semester</h2>
         <Select options={options} />
         </div>
        <div className='dashboard'>     
        <div className='barchart'>
        <BarChart
            dataset={dataset}
            xAxis={[
                {
                    scaleType: 'band',
                    dataKey: 'faculty',
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

export default NumberOfStudents;