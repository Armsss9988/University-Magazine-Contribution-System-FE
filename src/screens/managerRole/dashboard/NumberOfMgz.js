import "../../css/styles.css";
import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import HeaderManger from "../../../components/HeaderManger";
import { dashboardAPI, semesterAPI , facultyAPI } from "../../../api/api";
import Select from "react-select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function NumberOfMgz() {
  const [contributions, setContributions] = useState([]); // Initialize with empty array
  const [options, setOptions] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const submissionsResponse = await dashboardAPI.contributions(); // Handle potential errors
        const semestersResponse = await semesterAPI.listSemester();
        
        setContributions(submissionsResponse.data); // Set after data is fetched
        console.log("Contributors:", submissionsResponse.data); // Log retrieved data

        const semesterOptions = semestersResponse.data.map((semester) => ({
          value: semester._id,
          label: semester.academic_year,
        }));
        setOptions(semesterOptions);
        console.log("Semesters:", semesterOptions); // Log formatted semester options
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
        // Optionally, display an error message to the user
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);
  const handleSelectChange = async (selected) => {
    const filteredData = contributions.filter(
      (item) => item.semester === selected.value
    );
    console.log("filteredData:", filteredData);
     // Update dataSet state with filtered data
    console.log("Selected option:", selected.value);
    const faculties = await facultyAPI.listFaculty();
    const data = [];
    faculties.data.forEach((faculty) => {
        const emptyFaculty = filteredData.filter(
            (item) => item.faculty === faculty._id
          );
          if(!emptyFaculty || emptyFaculty.length == 0){
            data.push({'faculty':faculty._id, 'name': faculty.name, 'count': 0});
          }
          else{
            emptyFaculty[0].name = faculty.name;
            data.push(emptyFaculty[0]);
          }

    });
    console.log("Data:", data);
    setDataSet(data);

    console.log("Dataset:", dataSet); 
  };

  const chartData = {
    labels: dataSet.map((item) => item.name), 
    datasets: [
      {
        label: 'Number of Contributions', 
        data: dataSet.map((item) => item.count), 
        backgroundColor: COLORS, 
        borderColor: COLORS, 
        borderWidth: 1, 
      },
    ],
  };

  const chartOptions = {
    scales: {
      y:
        {
          type: 'linear',
          animationEnabled: true,
          zoomEnabled: true,
          panEnabled: true,
          min: 0,
          ticks: {
            stepSize: 1,
            callback: function(value) {
              return Math.floor(value); // Làm tròn xuống số nguyên
            },
          }
        },
      x:
        {
          
        },
    },
    responsive: true,
  };

  return (
    <div className="container">
      <HeaderManger />
      <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
      <div className="dropdown">
        <h2 style={{ fontSize: "20px" }}>Semester</h2>
        <Select options={options} onChange={handleSelectChange} />
      </div>
      <div className="dashboard">
        <div className="barchart" style={{ maxWidth: '600px' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default NumberOfMgz;
