'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState([]); // State variable to store the fetched data

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  },);

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/mongodb'); // Make a GET request to the '/api/mongodb' endpoint
      setData(res.data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error); // Log an error if the data fetching fails
    }
  };

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>; // Display a message if there is no data or the data is not an array
  }

  return (
    <div class='text-center mx-auto max-w-4xl'>
      <h1 class='m-4 text-3xl font-bold text-gray-800'>Home Page</h1> 
      <h2 class='mb-4 text-2xl text-gray-700'>Employee Data:</h2>
      <ul class='list-disc list-inside bg-white rounded-lg  p-6'>
      </ul>
    </div>
  );
};

export default Home;
