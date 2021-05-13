import './paginate.scss';

const Pagination = ({ jobsPerPage, totalJobs, setCurrentPage, currentPage }) => {
  let pageNumber = 1;

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumber = i;
  };

  const paginateForward = (pageNumber) =>{
    if(currentPage !== Math.ceil(totalJobs / jobsPerPage)){
      setCurrentPage(currentPage + 1);
      pageNumber++;
    }else if(currentPage === Math.ceil(totalJobs / jobsPerPage)){
      setCurrentPage(currentPage - (currentPage - 1));
      pageNumber--;
    }
  };

  const paginateBackward = (pageNumber) =>{
    if(currentPage !== Math.ceil(totalJobs / jobsPerPage) && currentPage !== 1){
      setCurrentPage(currentPage - 1);
      pageNumber--;
    }else if(currentPage === 1){
      setCurrentPage(Math.ceil(totalJobs / jobsPerPage));
      pageNumber=currentPage;
    }else if(currentPage === Math.ceil(totalJobs / jobsPerPage)){
      setCurrentPage(currentPage - 1);
      pageNumber--;
    }
  };

  return (
    <div className="paginate-right-button-container">
      <button className="paginate-button-left" onClick={() => paginateBackward(pageNumber)}></button>
      <button className="paginate-button-right" onClick={() => paginateForward(pageNumber)}></button>
    </div>
  )
};

export default Pagination;