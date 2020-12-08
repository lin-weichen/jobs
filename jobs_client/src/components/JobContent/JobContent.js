import React, { useState } from "react";
import "./JobContent.css";

const JobContent = (props) => {
  const { selectedJob } = props;
  return (
    <div className="job-detail-container">
      <h1>JobTitle: {selectedJob ? selectedJob["JobTitle"] : null}</h1>
      <h2>Salary: {selectedJob ? selectedJob["Salary"] : null}</h2>
      <h2>Location: {selectedJob ? selectedJob["Location"] : null}</h2>
      <h2>Post Date: {selectedJob ? selectedJob["Post Date"] : null}</h2>
      <h2>Job Type: {selectedJob ? selectedJob["Job Type"] : null}</h2>
    </div>
  );
};

export default JobContent;
