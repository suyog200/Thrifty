// // import React from 'react'

// const Table = () => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Airline</th>
//             <th>Departure</th>
//             <th>Destination</th>
//             <th>Date of Departure</th>
//             <th>Class</th>
//             <th>Prices</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>AirAsia</td>
//             <td>Bangalore</td>
//             <td>Goa</td>
//             <td>04/20/2024</td>
//             <td>Business</td>
//             <td>3000</td>
//           </tr>
//           <tr>
//             <td>AirAsia</td>
//             <td>Bangalore</td>
//             <td>Goa</td>
//             <td>04/20/2024</td>
//             <td>Business</td>
//             <td>3000</td>
//           </tr>
//           <tr>
//             <td>AirAsia</td>
//             <td>Bangalore</td>
//             <td>Goa</td>
//             <td>04/20/2024</td>
//             <td>Business</td>
//             <td>3000</td>
//           </tr>
//           {/* Add more rows if needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import { useState } from "react";
import ReactPaginate from "react-paginate";

const Table = () => {
  // Static data
  const staticData = [
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    {
      airline: "AirAsia",
      departure: "Bangalore",
      destination: "Goa",
      date: "04/20/2024",
      class: "Business",
      price: "3000",
    },
    // Add more static data as needed
  ];

  const [pageNumber, setPageNumber] = useState(0);
  const recordsPerPage = 10;
  const pagesVisited = pageNumber * recordsPerPage;

  const displayData = staticData
    .slice(pagesVisited, pagesVisited + recordsPerPage)
    .map((row, index) => (
      <tr key={index}>
        <td>{row.airline}</td>
        <td>{row.departure}</td>
        <td>{row.destination}</td>
        <td>{row.date}</td>
        <td>{row.class}</td>
        <td>{row.price}</td>
      </tr>
    ));

  const pageCount = Math.ceil(staticData.length / recordsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Date of Departure</th>
            <th>Class</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
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
