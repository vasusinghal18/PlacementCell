import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companies from '../data';

const CompanySelector = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const navigate = useNavigate();

  const handleSelection = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedCompany) {
      navigate(`/company/${selectedCompany}`);
    }
  };

  return (
    <div>
      <select onChange={handleSelection} value={selectedCompany}>
        <option value="">Select a Company</option>
        {companies.map(company => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!selectedCompany}>Go</button>
    </div>
  );
};

export default CompanySelector;