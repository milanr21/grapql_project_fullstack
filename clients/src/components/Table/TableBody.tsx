import React from "react";

interface TableBodyProps<T> {
  data: T[];
  headers: string[];
}

const TableBody = <T extends Record<string, any>>({
  data,
  headers,
}: TableBodyProps<T>) => {
  const renderRow = (item: T) => (
    <tr key={item.id}>
      {headers.map((header) => (
        <td key={header}>{item[header.toLowerCase()]}</td>
      ))}
    </tr>
  );

  return <tbody>{data.map((item) => renderRow(item))}</tbody>;
};

export default TableBody;
