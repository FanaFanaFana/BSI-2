import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const COUNTRIES_PER_PAGE = 15;

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCountries.length / COUNTRIES_PER_PAGE);
  const startIndex = (currentPage - 1) * COUNTRIES_PER_PAGE;
  const currentCountries = filteredCountries.slice(startIndex, startIndex + COUNTRIES_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      {/* Headline */}
      <h1>Country List</h1>
      
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
      <ul>
        {currentCountries.map((country) => (
          <li key={country.cca3}>
            {country.name.common} - {country.capital ? country.capital[0] : 'No Capital'}
          </li>
        ))}
      </ul>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default CountryList;
