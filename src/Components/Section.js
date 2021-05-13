import React, { useState } from 'react';

import Card from './Card';
import Pagination from './Pagination';

export default function Section (props){
  const data = props.data;
  const [clicked, setClicked] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  
  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstPost, indexOfLastPost);

  const reverse = () => {
    if(!clicked){
      setClicked(true);
    }
    else{
      setClicked(false);
    }
  };

  const Cards = currentJobs.map(
    (jobs, index) => {
      return <Card data={jobs} index={index}/>
    }
  ); 

  return (
    <>
      <div className={clicked ?"section-reverse" : "section"}>
        {Cards}
      </div>
      <Pagination
        currentJobs={data}
        jobsPerPage={jobsPerPage}
        totalJobs={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="button-container">
        <button className="button" onClick={() => reverse()}>{clicked ?"Hátra" : "Előre"}</button>
      </div>
    </>
  )
};