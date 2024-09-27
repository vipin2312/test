import React from 'react';
import './FilterSidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h3>Industry</h3>
      <label><input type="checkbox" /> Agriculture, Fishing and Forestry</label>
      <label><input type="checkbox" /> Arts, Entertainment and Recreation</label>
      <label><input type="checkbox" /> Banking, Finance and Insurance</label>
      <label><input type="checkbox" /> Construction, Architecture and Property</label>
      <hr />
      <h3>Experience</h3>
      <label><input type="checkbox" /> Entry Level (&lt;2 years)</label>
      <hr />
      <h3>Job Type</h3>
      <label><input type="checkbox" /> Contractual</label>
      <h3>Company(0/12)</h3>
      <hr />
    </div>
  );
};

export default FilterSidebar;