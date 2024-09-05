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

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/category");
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  const deleteCategory = (data) => {
    console.log(data);
    try {
      axiosInstance.delete("/category/" + data.id);
      console.log("Data Deleted Successfully");
    } catch (error) {
      console.error("Error Deleting data:", data.name);
    }
  };

  const editCategory = (re) => {};

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
        accessor: "Action",
        Cell: ({ row }) => (
          <span
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="assets/Edit-btn.png"
              alt="Edit"
              className="row-btns"
              onClick={() => editCategory(row.original)}
            />{" "}
            {/* Edit Icon */}
            <img
              src="assets/Delete-btn.png"
              alt="Delete"
              className="row-btns"
              onClick={() => deleteCategory(row.original)}
            />
            {/* Delete Icon */}
          </span>
        ),
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
    </div>
  );
};
