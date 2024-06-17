
import { useEffect, useState } from "react";

const Pagination = ({ pagesCount, currentPage, setCurrentPage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
      if (i === currentPage) {
        pagesArray.push(
          <li className="page-item active" key={i}>
            <button className="page-link" onClick={() => setCurrentPage(i)}>
              {i}
            </button>
          </li>
        );
        continue;
      }

      pagesArray.push(
        <li key={i} className="page-item">
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    setPages(pagesArray);
  }, [currentPage, pagesCount, setCurrentPage]);

  const getPreviousButton = () => {
    if (currentPage === 1) {
      return (
        <li className="page-item disabled">
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        </li>
      );
    }

    return (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      </li>
    );
  };

  const getNextButton = () => {
    if (currentPage === pagesCount) {
      return (
        <li className="page-item disabled">
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      );
    }

    return (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </li>
    );
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {getPreviousButton()}
        {pages}
        {getNextButton()}
      </ul>
    </nav>
  );
};

export default Pagination;
