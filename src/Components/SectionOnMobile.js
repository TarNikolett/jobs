import React, { useState } from 'react';

import Card from './Card';
import Pagination from './Pagination';

export default function Section (props){
  const data = props.data;  

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(1);

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstPost, indexOfLastPost);
  
  const Cards = currentJobs.map(
    (jobs,index) => {
      return <Card data={jobs} index={index}/>
    }
  );

  return (
    <>
      <div className="section">
        {Cards}
      </div>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
};