import { Table } from "components/Table";
import React, { useEffect, useState } from "react";
import "css/Products.css";
import { PageHeader } from "components/PageHeader";
import axiosInstance from "utils/axios";

export const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/product");
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

  const deleteProduct = (data) => {
    console.log(data);
    try {
      axiosInstance.delete("/product/" + data.id);
      console.log("Data Deleted Successfully");
    } catch (error) {
      console.error("Error Deleting data:", data.name);
    }
  };

  const editProduct = (re) => {};

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Product name",
        accessor: "name",
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
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "col6",
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
              onClick={() => editProduct(row.original)}
            />{" "}
            {/* Edit Icon */}
            <img
              src="assets/Delete-btn.png"
              alt="Delete"
              className="row-btns"
              onClick={() => deleteProduct(row.original)}
            />
            {/* Delete Icon */}
          </span>
        ),
      },
    ],
    []
  );
  return (
    <div className="Products">
      <PageHeader
        name="Products"
        icon="/assets/Products.png"
        alt="Products"
        addRoute="/addProduct"
      />
      <Table columns={columns} data={data} />
    </div>
  );
};
