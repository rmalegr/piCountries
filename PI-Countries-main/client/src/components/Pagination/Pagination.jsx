import React from 'react';
import s from '../Pagination/Pagination.module.css';
const Pagination = ({ showPerPage, allCountries, pagination, page }) => {
  const pageNumbers = [];
  const total = Math.ceil(allCountries / showPerPage);
  for (let i = 1; i < total; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <button
        onClick={page > 1 ? () => pagination(page - 1) : null}
        hidden={page === 1 ? true : false}
      >
        &lt;
      </button>
      {pageNumbers &&
        pageNumbers.map((n) => (
          <button
            key={n}
            className={page !== n ? s.btn : s.current}
            onClick={() => pagination(n)}
          >
            {n}
          </button>
        ))}
      <button
        className={s.btn}
        onClick={page < total ? () => pagination(page + 1) : null}
        hidden={page === total ? true : false}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
