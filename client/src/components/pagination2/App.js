import React, { useState, useCallback } from "react";
import Paginations from "./Pagination";
import data from "./data.json";
import styled from "styled-components";

const Style = styled.div`
  .current-page {
    font-size: 1.5rem;
    vertical-align: middle;
  }

  table {
    width: 100%;
    overflow-y: hidden;
  }

  tr,
  td,
  th {
    text-align: left;
    border: 1px solid black;
    font-size: 18px;
  }

  .user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .user__body {
    padding-left: 20px;
    padding: 20px;
  }

  .current-page {
    font-size: 1.5rem;
    vertical-align: middle;
  }

  .pagination-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10 !important;
  }

  /* Override some Bootstrap pagination styles */
  ul.pagination {
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  ul.pagination li.page-item.active a.page-link {
    color: #445565 !important;
    background-color: #e3e7eb !important;
    border-color: #ced4da !important;
  }
  ul.pagination a.page-link {
    padding: 0.75rem 1rem;
    min-width: 3.5rem;
    text-align: center;
    box-shadow: none !important;
    border-color: #ced4da !important;
    color: #6b88a4;
    font-weight: 900;
    font-size: 1rem;
  }
  ul.pagination a.page-link:hover {
    background-color: #f4f4f4;
  }
`;
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = data.length;
  let LIMIT = 5;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const currentData = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  return (
    <Style>
      <main role="main" class="container">
        <div className="current-page">
          <div className="user">
            <div className="user__body">
              <table id="table1">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>userId</th>
                    <th width="100%">title</th>
                    <th>status</th>
                  </tr>
                </thead>
                {currentData.map((item) => {
                  return (
                    <tbody>
                      <tr>
                        <th scope="row">{item.id}</th>
                        <th scope="row">{item.userId}</th>
                        <td>{item.title}</td>
                        <td>
                          {item.completed ? "completed" : "not completed"}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="pagination-wrapper">
            <Paginations
              totalRecords={NUM_OF_RECORDS}
              pageLimit={LIMIT}
              pageNeighbours={2}
              onPageChanged={onPageChanged}
              currentPage={currentPage}
            />
          </div>
        </div>
      </main>
    </Style>
  );
};
export default App;
