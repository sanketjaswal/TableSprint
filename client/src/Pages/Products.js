import { Table } from "components/Table";
import React from "react";
import "css/Products.css";

export const Products = () => {
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
        Header: "Product name",
        accessor: "col2",
      },
      {
        Header: " Sub Category",
        accessor: "col3",
      },
      {
        Header: " Category",
        accessor: "col4",
      },
      {
        Header: "Status",
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
    <div className="Products">
      <h1> This is Products</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};
