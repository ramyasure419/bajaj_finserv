import React, { useState, useEffect } from 'react';
import MultiSelectComponent from './components/MultiSelectComponent';

const Home = () => {
  const [apiResponse, setApiResponse] = useState(null);

  // Simulate fetching API response
  const fetchApiResponse = () => {
    setApiResponse(["A", "B", "z", "3", "a"]);
  };

  // Set the document title to your roll number
  useEffect(() => {
    document.title = "AP21110011419"; // Replace with your actual roll number
  }, []);

  return (
    <div>
      <h1>JSON Processor with Multi-Select</h1>
      <button onClick={fetchApiResponse}>Simulate API Response</button>
      {apiResponse && <MultiSelectComponent apiResponse={apiResponse} />}
    </div>
  );
};

export default Home;
