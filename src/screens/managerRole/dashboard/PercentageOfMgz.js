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
  const [options, setOptions] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [faculties, setFaculties] = useState([]);
  var chartData = {
    labels: dataSet.map((item) => item.name),
    datasets: [
      {
        label: "Percentage of Contributions",
        data: dataSet.map((item) => item.percentage),
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const updateChart = () => {
      const chartData = {
        labels: dataSet.map((item) => item.name),
        datasets: [
          {
            label: "Percentage of Contributions",
            data: dataSet.map((item) => item.percentage),
            backgroundColor: COLORS,
            borderColor: COLORS,
            borderWidth: 1,
          },
        ],
      };
      return chartData;
    };
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
        // ... rest of the code
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state
      } finally {
        setIsLoading(false); // Clear loading state
      }
    };
    fetchData();
    chartData = updateChart();
  }, []);
  const handleDataChange = async (selected) => {
    const data = [];
    setIsLoading(true);
    try {
      const res = await dashboardAPI.percentage(selected.value);
      faculties.forEach((faculty) => {
        const emptyFaculty = res.data.filter(
          (item) => item.faculty == faculty._id
        );
        if (emptyFaculty && emptyFaculty.length > 0) {
          emptyFaculty[0].name = faculty.name;
          data.push(emptyFaculty[0]);
        }
      });
      setDataSet(data);
      console.log("Dataset:", dataSet);
    } catch (error) {
      console.error("Error fetching percentage or faculty data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <HeaderManger />
      <h1 style={{ fontSize: "50px" }}>Dashboard</h1>
      <h2>Majors</h2>
      <Select options={options} onChange={handleDataChange} />
      <div className="dashboard"></div>
      <div className="pie-chart">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>{dataSet.length > 0 && <Pie data={chartData} />}</>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default PercentageOfMgz;
