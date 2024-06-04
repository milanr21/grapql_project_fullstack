import React from "react";

interface TableHeadProps {
  headers: String[];
}

const TableHead: React.FC<TableHeadProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
