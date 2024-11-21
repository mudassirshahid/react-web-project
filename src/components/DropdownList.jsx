import React, { useState } from "react";

const DropdownList = () => {
  const countryArrays = [
    {
      country: "Pakistan",
      value: "Pak",
      cities: ["Karachi", "Islamabad", "Lahore"],
    },
    {
      country: "UAE",
      value: "Saudia",
      cities: ["Makkah","Madina", "Riyadh", "Jeddah"],
    },
  ];

  const [countries] = useState(countryArrays); 
  const [cities, setCities] = useState([]); 

  const handleCountryChange = (value) => {
    const selectedCountry = countries.find((item) => item.value === value);
    setCities(selectedCountry ? selectedCountry.cities : []);
  };

  return (
    <div className="App">
      {/* Dropdown for countries */}
      <select onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="" disabled selected>
          Select a Country
        </option>
        {countries.map((item, index) => (
          <option key={index} value={item.value}>
            {item.country}
          </option>
        ))}
      </select>

      {/* Dropdown for cities */}
      <select>
        <option value="" disabled selected>
          Select a City
        </option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
