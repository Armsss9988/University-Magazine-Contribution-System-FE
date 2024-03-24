import "../../css/styles.css";
import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import HeaderManger from "../../../components/HeaderManger";
import Select from "react-select";
import { dashboardAPI, semesterAPI, facultyAPI } from "../../../api/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function PercentageOfMgz() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const [percentage, setPercentage] = useState([]); // Initialize with empty array
  const [options, setOptions] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [faculties, setFaculties] = useState([]);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const facultiesResponse = await facultyAPI.listFaculty();
        const semestersResponse = await semesterAPI.listSemester();
        setOptions(
          semestersResponse.data.map((semester) => ({
            value: semester._id,
            label: semester.academic_year,
          }))
        );
        setFaculties(facultiesResponse.data);
        handleDataChange(selected);
        // ... rest of the code
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state
      } finally {
        setIsLoading(false); // Clear loading state
      }
    };

    fetchData();
    
  }, [dataSet]);
  const handleDataChange = async (selectedOption) => {
    const data = [];
    setIsLoading(true);
    try {
        if(selectedOption.value){
            const percentageResponse = await dashboardAPI.percentage(selectedOption.value);
      setPercentage(percentageResponse.data);
      faculties.forEach((faculty) => {
        const emptyFaculty = percentage.filter(
          (item) => item.faculty == faculty._id
        );
        if (emptyFaculty && emptyFaculty.length > 0) {
          emptyFaculty[0].name = faculty.name;
          data.push(emptyFaculty[0]);
        }
      });
        }    
      setDataSet(data);
    } catch (error) {
      console.error("Error fetching percentage or faculty data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const chartData = {
    labels: dataSet.map((item) => item.name),
    datasets: [
      {
        label: "Number of Contributions",
        data: dataSet.map((item) => item.percentage),
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
      },
    ],
  };
  const callData = () => {
    console.log(dataSet);
  }


  return (
    <div className="container">
      <HeaderManger />
      <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
      <h2>Majors</h2>
      <button onClick={callData}>Data</button>
      <Select options={options} onChange={e => setSelected(e)} />
      <div className="dashboard"></div>
      <div className="pie-chart">
      {isLoading ? (
        <h2>Loading...</h2> 
      ) : (
        <>
          {dataSet.length > 0 && <Pie data={chartData} />} 
        </>
      )}
      </div>
      <Footer />
    </div>
  );
}
export default PercentageOfMgz;
