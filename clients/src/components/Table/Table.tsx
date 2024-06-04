import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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
    <tr key={item.id}>
      {headers.map((header) => (
        <td className='border-b-2 border-l-2 border-black' key={header}>
          {item[header]}
        </td>
      ))}
      <td>
        <button onClick={() => onDelete(item.id)} className='bg-red-600 p-2'>
          <FaTrashAlt className='text-white cursor-pointer' />
        </button>
      </td>
    </tr>
  );

  return (
    <table className='border-black border w-full mt-8'>
      <thead className='text-center border border-black'>
        <tr className='text-center'>
          {headers.map((header, index) => (
            <th className='text-center' key={index}>
              {header.charAt(0).toUpperCase() + header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='text-center'>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
