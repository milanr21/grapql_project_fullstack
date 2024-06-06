// Table.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TableProps<T> {
  headers: string[];
  data: T[];
  onDelete: (id: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = <T extends Record<string, any>>({
  headers,
  data,
  onDelete,
}: TableProps<T>) => {
  const renderRow = (item: T) => (
    <tr
      key={item.id}
      className="hover:bg-gray-100  transition-colors duration-200"
    >
      {headers.map((header) => (
        <td
          className="border-b text-center border-gray-200 px-4 py-2"
          key={header}
        >
          {item[header]}
        </td>
      ))}
      <td className="border-b border-gray-200 px-4 py-2">
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-600 p-2  ml-4 rounded hover:bg-red-700 transition-colors duration-200"
        >
          <FaTrashAlt className="text-white cursor-pointer" />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
        <thead className="bg-gray-200">
          <tr>
            {headers.map((header, index) => (
              <th className="text-center px-4  py-2" key={index}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
            <th className="text-center px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
