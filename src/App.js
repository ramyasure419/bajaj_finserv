import React, { useState } from 'react';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  
  // Handle JSON input
  const handleChange = (e) => {
    setJsonInput(e.target.value);
    setIsValidJson(true); // Reset on input change
  };

  // Validate JSON and call API
  const handleSubmit = async () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setIsValidJson(true);
      
      // Make API call to your backend
      const response = await fetch('/api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedJson),
      });
      const data = await response.json();
      setApiResponse(data);
      setDropdownOptions([]); // Initialize dropdown options
      
    } catch (error) {
      setIsValidJson(false);
      setErrorMessage('Invalid JSON format. Please correct it.');
    }
  };

  return (
    <div>
      <h1>JSON Processor</h1>
      <textarea
        value={jsonInput}
        onChange={handleChange}
        placeholder='Enter your JSON here'
      />
      <button onClick={handleSubmit}>Submit</button>
      {!isValidJson && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default App;
