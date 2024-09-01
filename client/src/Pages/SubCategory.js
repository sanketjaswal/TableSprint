import { Table } from "components/Table";
import React from "react";
import "css/Subcategory.css";
import { PageHeader } from "components/PageHeader";

export const SubCategory = () => {
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
        Header: "Sub Category name",
        accessor: "col2",
      },
      {
        Header: "Category name",
        accessor: "col3",
      },
      {
        Header: "Image",
        accessor: "col4",
      },
      {
        Header: "Status",
        accessor: "col5",
      },
      {
        Header: "Sequence",
        accessor: "col6",
      },
      {
        Header: "Action",
        accessor: "col7",
      },
    ],
    []
  );
  return (
    <div className="sub-category">
      <PageHeader
        name="Sub category"
        icon="/assets/SubCategory.png"
        alt="Sub Category"
      />
      <Table columns={columns} data={data} />
    </div>
  );
};
