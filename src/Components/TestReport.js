import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { db, collection, getDocs } from './FirebaseConfig'; // Import Firestore functions
import './TestReportComponent.css';

export default function TestReportComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'test'));
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setData(documents);
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Buyer',
        accessor: 'buyer',
      },
      {
        Header: 'Season',
        accessor: 'season',
      },
      {
        Header: 'Colour',
        accessor: 'colour',
      },
      {
        Header: 'Fabric Description',
        accessor: 'fabricDescription',
      },
      {
        Header: 'Fabric Composition',
        accessor: 'fabricComposition',
      },
      {
        Header: 'Fabric GSM',
        accessor: 'fabricGsm',
      },
      {
        Header: 'TRF No',
        accessor: 'trfNo',
      },
      {
        Header: 'Submitted Date',
        accessor: 'submittedDate',
      },
      {
        Header: 'Report No',
        accessor: 'reportNo',
      },
      {
        Header: 'Date of Receive',
        accessor: 'dateOfRecieve',
      },
      {
        Header: 'PDF File',
        accessor: 'pdfLink',
        Cell: ({ value }) => <a href={value} target="_blank" rel="noopener noreferrer">PDF</a>,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="test-report-container">
      <h1>Test Report Component</h1>
      <table {...getTableProps()} className="test-report-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
