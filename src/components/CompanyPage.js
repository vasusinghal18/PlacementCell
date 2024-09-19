import React from 'react';
import { useParams } from 'react-router-dom';
import companies from '../data';

const CompanyPage = () => {
  const { id } = useParams();
  const company = companies.find(company => company.id === id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="company-page">
      <h2>{company.name} Past Year Questions</h2>
      <div className="image-gallery">
        {company.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Question ${index + 1}`}
            className="company-image"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;