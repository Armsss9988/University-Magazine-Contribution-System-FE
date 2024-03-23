import '../../css/styles.css';
import React, { useState, useEffect } from 'react';
import Footer from '../../../components/Footer';
import HeaderManger from "../../../components/HeaderManger";
import { dashboardAPI, semesterAPI } from '../../../api/api';
import { BarChart } from '@mui/x-charts/BarChart';
import Select from 'react-select';

function NumberOfStudents() {
    const [contributors, setContributors] = useState();
    const [options, setOptions] = useState([]);
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        fetchContributors();
        fetchSemesters();
      }, []);
    
      const fetchContributors = async () => {
        const {data} = await dashboardAPI.contributors();
        setContributors(data);
        console.log(contributors);
      }
      const fetchSemesters = async () => {
        const {data} = await semesterAPI.listSemester();
        console.log("semester: " + data);
        let item = [];
        data.forEach((semester) => {
            item.push({'value': semester._id, 'label': semester.academic_year});
        })
        setOptions(item);
      }
      const handleSelectChange = (selected) => {
        const filteredData = contributors.filter((item) => item.semester === selected.value);
        setDataSet(filteredData);
        console.log('Selected option:', selected.value);
        console.log('Dataset:', dataSet);
      };

    const chartSetting = {
        height: 500, // Thêm chiều cao 300px
        width : 1000,
    };
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  

    return (
        <div className='container'>
        <HeaderManger/>
        <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
        <div className='dropdown'>
        <h2 style={{ fontSize: "20px" }}>Semester</h2>
         <Select 
            options={options}
            onChange={handleSelectChange} />
         </div>
        <div className='dashboard'>     
        <div className='barchart'>
        {/* <BarChart
            data={dataSet}
            xField="faculty"
            yField="count"
            xAxis={{ title: 'Faculty' }}
            yAxis={{ title: 'Number' }} 
            />        */}
         </div>
        </div>
        <Footer/>
        </div>
    );
}

export default NumberOfStudents;