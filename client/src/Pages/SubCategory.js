import { Table } from "components/Table";
import React, { useEffect, useState } from "react";
import "css/Subcategory.css";
import { PageHeader } from "components/PageHeader";
import axiosInstance from "utils/axios";

export const SubCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/subcategory");
        console.log(response.data);
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
        Header: "Sub Category name",
        accessor: "name",
      },
      {
        Header: "Category name",
        accessor: "Category.name",
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
    <div className="sub-category">
      <PageHeader
        name="Sub category"
        icon="/assets/SubCategory.png"
        alt="Sub Category"
        addRoute="/addSubCategory"
      />
      <Table columns={columns} data={data} />
    </div>
  );
};
