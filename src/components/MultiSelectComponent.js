import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const dropdownOptions = [
  { label: "Alphabets", value: "alphabets" },
  { label: "Numbers", value: "numbers" },
  { label: "Highest lowercase alphabet", value: "highestLowercase" },
];

const MultiSelectComponent = ({ apiResponse }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectionChange = (selected) => {
    setSelectedOptions(selected);
  };

  // Function to filter the API response based on selected options
  const filterResponse = () => {
    let filteredData = apiResponse;

    if (selectedOptions.some(opt => opt.value === 'alphabets')) {
      filteredData = filteredData.filter(item => /^[A-Za-z]+$/.test(item));
    }
    if (selectedOptions.some(opt => opt.value === 'numbers')) {
      filteredData = filteredData.filter(item => /^[0-9]+$/.test(item));
    }
    if (selectedOptions.some(opt => opt.value === 'highestLowercase')) {
      filteredData = filteredData
        .filter(item => /^[a-z]+$/.test(item))
        .sort((a, b) => b.localeCompare(a))[0];
    }
    
    return filteredData;
  };

  return (
    <div>
      {apiResponse && (
        <>
          <MultiSelect
            options={dropdownOptions}
            value={selectedOptions}
            onChange={handleSelectionChange}
            labelledBy="Select Options"
          />
          <div>
            <h2>Filtered Response:</h2>
            <ul>
              {Array.isArray(filterResponse()) ? (
                filterResponse().map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>{filterResponse()}</li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiSelectComponent;
