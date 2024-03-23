import React from 'react';
import '../../css/styles.css';
import { BarChart } from '@mui/x-charts/BarChart';
import Footer from '../../../components/Footer';
import HeaderManger from "../../../components/HeaderManger";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Select from 'react-select';

function PercentageOfMgz() {
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
    const options = [
        { value: 'business', label: 'Business' },
        { value: 'graphic design', label: 'Graphic design'},
        { value: 'it', label: 'IT' },
      ];
    

    return (

        <div className='container'>
        <HeaderManger/>
        <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
        <h2>Majors</h2>
         <Select options={options} />
        <div className='dashboard'>
            
         </div>
         <div className='pie-chart'>
        <ResponsiveContainer width="100%" height={600}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
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
        <Footer/>
        </div>
        );
}
export default PercentageOfMgz;