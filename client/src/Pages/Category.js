import React from "react";
import { useTable } from "react-table";
import "css/Category.css";
import { Table } from "components/Table";

export const Category = () => {
  const data = [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "React",
      col2: "Table",
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "col1",
      },
      {
        Header: "Category name",
        accessor: "col2",
      },
      {
        Header: "Image",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "Sequence",
        accessor: "col5",
      },
      {
        Header: "Action",
        accessor: "col6",
      },
    ],
    []
  );

  return (
    <div className="Category">
      <h1> This is Category</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};
