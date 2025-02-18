import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

// Initialize the 3D module
Highcharts3D(Highcharts);

function Piechart1() {
  const [collegeData, setCollegeData] = useState([]);
  
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/checking1'); // Adjust the URL
        const data = await response.json();
        
        // Map the data for the pie chart
        const chartData = data.map(college => ({
          name: college.college,
          y: college.totalStudents
        }));
        
        setCollegeData(chartData);
      } catch (error) {
        console.error('Error fetching college data:', error);
      }
    };
    
    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'College Student Distribution',
    },
    accessibility: {
        enabled : false,
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Total Students',
        data: collegeData, // Data dynamically fetched from the API
      },
    ],
    credits: {
        enabled: false, // This will disable the Highcharts.com label
      },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default Piechart1;