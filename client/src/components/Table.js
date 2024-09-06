import React from "react";
import { useTable } from "react-table";
import "css/Table.css";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(rows);

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
                  {cell.column.Header === "Status" ? (
                    cell.value ? (
                      <p style={{ color: "rgba(0, 161, 26, 1)" }}>Active</p>
                    ) : (
                      <p style={{ color: "rgba(247, 5, 5, 1)" }}>Inactive</p>
                    )
                  ) : (
                    cell.render("Cell")
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
