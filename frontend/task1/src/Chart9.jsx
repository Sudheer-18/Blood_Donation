import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import "../src/assets/Components/proj/Graph.css"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart9 = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [collegeData, setCollegeData] = useState({ labels: [], datasets: [] });
  const [departmentData, setDepartmentData] = useState({});


  const colors = [
    "rgba(245, 222, 179, 1)",
    "rgba(255, 165, 0, 0.6)",
    "rgba(255, 69, 0, 0.6)",
   " rgba(255, 99, 71, 0.6)",
   "rgba(255, 105, 180, 0.6)",
  " rgba(255, 182, 193, 0.6)",
  "rgba(221, 160, 221, 0.6)",
  "rgba(186, 85, 211, 0.6)",
  "rgba(148, 0, 211, 0.6)",
  "rgba(100, 149, 237, 0.6)",
 " rgba(173, 216, 230, 0.6)",
 "rgba(135, 206, 250, 0.6)",

    // Add more colors as needed
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/Check1'); // Adjust the URL
        const data = await response.json();

        const colors = [
          "#B666D8",
          "#DC6967",
          "#858DE3",
         "#D285E3",
         "rgba(255, 105, 180, 0.6)",
        " rgba(255, 182, 193, 0.6)",
        "rgba(221, 160, 221, 0.6)",
        "rgba(186, 85, 211, 0.6)",
        "rgba(148, 0, 211, 0.6)",
        "rgba(100, 149, 237, 0.6)",
       " rgba(173, 216, 230, 0.6)",
       "rgba(135, 206, 250, 0.6)",

          // Add more colors as needed
        ];
        // Mapping the college data for the main chart
        const labels = data.map(college => college.college);
        const totalStudents = data.map(college => college.totalStudents);

        setCollegeData({
          labels,
          datasets: [
            {
              label: 'Total Students',
              data: totalStudents,
              backgroundColor: totalStudents.map((_, index) => colors[index % colors.length]),
              borderColor: totalStudents.map((_, index) => colors[index % colors.length].replace('0.6', '1')),
              borderWidth: 1,
              barThickness: 50,
              borderRadius: 10,
            },
          ],
        });

        // Mapping the department data for each college
        const deptData = {};
        data.forEach(college => {
          deptData[college.college] = {
            labels: Object.keys(college.departments),
            data: Object.values(college.departments),
          };
        });
        setDepartmentData(deptData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          padding: 5,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: true,
        },
      },
      y: {
        min: 0,
        max : 4500,
        // max: Math.max(...collegeData.datasets[0]?.data || [600]), // Adjust max based on college data
        ticks: {
          stepSize: 250,
          callback: (value) => value,
          padding: 5,
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const departmentChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allow flexible sizing
  scales: {
    x: {
      ticks: {
        padding: 5,
        maxRotation: 0,
        minRotation: 0,
      },
      grid: {
        display: true,
      },
      categoryPercentage: 1.0,  // Ensure one column per label
      barPercentage: 1.0,       // Ensure bars take full width of their column
    },
    y: {
      min: 0,
      max: Math.ceil(Math.max(...(departmentData[selectedCollege]?.data || [0]))), // Use Math.ceil to round up
      ticks: {
        stepSize: Math.ceil(Math.max(...(departmentData[selectedCollege]?.data || [0])) / 5), // Dynamic stepSize
        callback: (value) => Math.floor(value), // Ensure integers
        padding: 5,
      },
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

  // Handler for bar click
  const handleBarClick = (index) => {
    setSelectedCollege(collegeData.labels[index]);
  };

  const departmentColors = departmentData[selectedCollege]?.data.map((_, index) => colors[index % colors.length]) || [];
  return (
    <div className='Chart9_ma'>
      <div style={{ width: "100%", height: "100%" }}>
        <Bar
          data={collegeData}
          options={{
            ...chartOptions,
            onClick: (e, elements) => {
              if (elements.length > 0) {
                const index = elements[0].index;
                handleBarClick(index);
              }
            },
          }}
        />
      </div>

      {/* Department Data */}
      {selectedCollege && (
        <div style={{ marginTop: "0px", width: "100%" }}>
          <div className='z'>
            <div className='z1_'>{selectedCollege}'s Department Data</div>
          </div>
          
          <div style={{ width: "1200px", height: "400px", marginTop: "0%" }} className='y' >
            <Bar
              data={{
                labels: departmentData[selectedCollege]?.labels || [],
                datasets: [
                  {
                    label: 'Department Students',
                    data: departmentData[selectedCollege]?.data || [],
                    backgroundColor: departmentColors,
                    borderColor: departmentColors.map(color => color.replace('0.6', '1')),
                    borderWidth: 1,
                    barThickness: 40,
                    borderRadius: 10,
                  },
                ],
              }}
              options={departmentChartOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BarChart9;
