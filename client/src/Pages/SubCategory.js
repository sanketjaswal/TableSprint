import { Table } from "components/Table";
import React, { useEffect, useState } from "react";
import "css/Subcategory.css";
import { PageHeader } from "components/PageHeader";
import axiosInstance from "utils/axios";
import { useNavigate } from "react-router-dom";

export const SubCategory = () => {
  const [data, setData] = useState([]);
  const [edits, setEdits] = useState(0);

  let navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/subcategory");
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [edits]);

  const deleteSubCategory = (data) => {
    console.log(data);
    try {
      axiosInstance.delete("/subcategory/" + data.id);
      console.log("Data Deleted Successfully");
      let num = edits;
      num++;
      setEdits(num);
    } catch (error) {
      console.error("Error Deleting data:", data.name);
    }
  };

  const editSubCategory = (data) => {
    navigate("/editSubCategory", { state: { data: data } });
  };

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
              onClick={() => editSubCategory(row.original)}
            />{" "}
            {/* Edit Icon */}
            <img
              src="assets/Delete-btn.png"
              alt="Delete"
              className="row-btns"
              onClick={() => deleteSubCategory(row.original)}
            />
            {/* Delete Icon */}
          </span>
        ),
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
