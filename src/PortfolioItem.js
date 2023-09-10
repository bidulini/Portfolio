import React, { useState } from 'react';
import './index.css';

function PortfolioItem({ title, company, date, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImgClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="more-info">
        <div className="job-info">
          <div className="job-header">
            <h4>{company}</h4>
            <span className="date">{date}</span>
          </div>
          <div className="more-info">
            <p>{title}</p>
            <div className="img" onClick={handleImgClick}></div>
          </div>
          <hr className="underline"></hr>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-info">
          <p className='expanded-paragraph'>{description}</p>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
