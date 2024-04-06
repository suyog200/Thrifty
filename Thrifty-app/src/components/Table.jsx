

import { useState } from "react";
import ReactPaginate from "react-paginate";

// eslint-disable-next-line react/prop-types
const Table = ({predictedData, airlines, source, destination, classType, date}) => {
 

  const [pageNumber, setPageNumber] = useState(0);
  const recordsPerPage = 10;
  const pagesVisited = pageNumber * recordsPerPage;

  console.log(predictedData);

  const predictedDataArray = Object.values(predictedData);
  console.log(predictedDataArray);

  const displayData = predictedDataArray ?
  predictedDataArray.slice(pagesVisited, pagesVisited + recordsPerPage)
    .map((row, index) => {
      console.log(row);
      return (
        <tr key={index}>
          <td>{airlines}</td>
          <td>{source}</td>
          <td>{destination}</td>
          <td>{date}</td>
          <td>{classType}</td>
          <td>{row}</td>
        </tr>
      );
    }) :
  <tr><td colSpan="6">No data</td></tr>;

  const pageCount = Math.ceil(predictedDataArray.length / recordsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="table-container" style={{ overflowX: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "200px" }}>Airline</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Date of Departure</th>
            <th>Class</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>{displayData}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Table;
