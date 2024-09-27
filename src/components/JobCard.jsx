import React from "react";
import { BsPinFill } from "react-icons/bs";
import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <BsPinFill className="pin-icon" />
      <div className="job-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/395/417/original/modern-company-logo-design-vector.jpg"
          alt={job.company}
        />
      </div>
      <div className="job-details">
        <h4>{job.title}</h4>
        <p>{job.company}</p>
        <p className="job-location">{job.location}</p>
      </div>
      <div className="divider" />
      <div className="job-actions">
        <p></p>
        <p className="posted-on">Posted: {job.posted}</p>
      </div>
    </div>
  );
};

export default JobCard;
