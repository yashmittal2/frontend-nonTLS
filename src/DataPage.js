import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./DataPage.css";
import { Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";

const DataPage = () => {
  const data = useSelector((state) => state.data);
  const [renderTime, setRenderTime] = useState(0);
  const [tableData, setTableData] = useState([]);

  console.log(data);

  useEffect(() => {
    if (data && data.result) {
      setRenderTime(data.duration);
      setTableData(data.result);
    }
  }, [data]);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: 800,
          margin: 30,
          color: "red",
          border: "black",
          marginBottom: 70,
        }}
      >
        Data Table
      </h1>
      <p style={{ marginLeft: 100, marginTop: 10 }}>
        Total Entries:{tableData.length}
      </p>
      <p style={{ marginLeft: 100 }}>Rendering Time: {renderTime} ms</p>
      <Table
        className="container"
        headerHeight={40}
        height={350}
        rowHeight={30}
        rowCount={tableData.length}
        rowGetter={({ index }) => tableData[index]}
        width={1310}
      >
        <Column
          label="Index"
          dataKey="id"
          width={100}
          cellRenderer={({ cellData, rowIndex }) => rowIndex + 1}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="Date"
          dataKey="date"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="Continent"
          dataKey="continent"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="Location"
          dataKey="location"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="Population"
          dataKey="population"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="Total Cases"
          dataKey="totalcases"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
        <Column
          label="New Cases"
          dataKey="newcases"
          width={200}
          headerClassName="header-cell"
          className="table-cell"
        />
      </Table>
    </div>
  );
};

export default DataPage;
