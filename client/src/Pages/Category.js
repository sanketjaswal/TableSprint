import React, { useEffect, useState } from "react";
// import { useTable } from "react-table";
import "css/Category.css";
import axiosInstance from ".././utils/axios";
import { Table } from "components/Table";
import { PageHeader } from "components/PageHeader";
// import { NavButton } from "components/NavButton";
// import { AddItemPage } from "components/AddItempage";

export const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/category");
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Category name",
        accessor: "name",
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Sequence",
        accessor: "sequence",
      },
      {
        Header: "Action",
        accessor: "col7",
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
