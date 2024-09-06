import React from "react";
import { useTable } from "react-table";
import "css/Table.css";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="my-table">
      <thead>
        {headerGroups.map((headerGroup, headerIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
            {headerGroup.headers.map((column, colIndex) => (
              <th {...column.getHeaderProps()} key={colIndex}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => (
                <td {...cell.getCellProps()} key={cellIndex}>
                  {typeof cell.value === "boolean"
                    ? cell.value
                      ? "Active"
                      : "Inactive"
                    : cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
