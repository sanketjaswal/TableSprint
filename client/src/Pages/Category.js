import React from "react";
// import { useTable } from "react-table";
import "css/Category.css";
import { Table } from "components/Table";
import { NavButton } from "components/NavButton";
import { PageHeader } from "components/PageHeader";
import { AddItemPage } from "components/AddItempage";

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
      <PageHeader
        name="Category"
        icon="/assets/Category.png"
        addRoute="/addCategory"
      />
      <Table columns={columns} data={data} />
      {/* <AddItemPage name="Category" icon="/assets/backArrow.png" /> */}
    </div>
  );
};
