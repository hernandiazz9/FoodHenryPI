import React, { useState, useMemo } from 'react';
import Pagination from './examples/Pagination';
import Cards from "../Cards";
import {useSelector} from 'react-redux'


let PageSize = 2 ;

export default function App() {
  const { allRecipe } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allRecipe.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <Cards currentTableData={currentTableData}/>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={allRecipe.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
