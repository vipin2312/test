
import React from 'react';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
  const jobs = [
    { title: 'Junior Software Developer', location: 'Faridabad, Haryana', posted: '1 hour ago', company: 'JD Pvt. Ltd.', logo: '/logo.png' },
    { title: 'Python Developer', location: 'Faridabad, Haryana', posted: '3 hours ago', company: 'CryptoCoin', logo: '/logo2.png' },
    { title: 'React.js Developer', location: 'Faridabad, Haryana', posted: '3 hours ago', company: 'CryptoCoin', logo: '/logo3.png' },
    { id: 4, title: 'Art Teacher', company: 'Manish Test IKON', location: 'Noida, Uttar Pradesh, India', posted: '5 days ago' },
    { id: 5, title: 'Lead Java Developer', company: 'Ikonwork', location: 'Noida, Uttar Pradesh, India', posted: '5 days ago' },
    { id: 6, title: ' Java Developer', company: 'Ikonwork', location: 'Noida, Uttar Pradesh, India', posted: '5 days ago' },
    // we can add more objects to form more jobs
  ];

  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
