import { Table } from "components/Table";
import React, { useEffect, useState } from "react";
import "css/Products.css";
import { PageHeader } from "components/PageHeader";
import axiosInstance from "utils/axios";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/product");
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
