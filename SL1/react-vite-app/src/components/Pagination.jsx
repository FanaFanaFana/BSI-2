import React from 'react';

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={currentPage === 1} className="pagination-btn">
        Previous
      </button>
      <span className="pagination-text">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages} className="pagination-btn">
        Next
      </button>
    </div>
  );
};

export default Pagination;
