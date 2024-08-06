import React from 'react';
import './Table.css';

interface ColumnProps {
  title: string;
  key: string;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string;
}

export interface TableProps {
  columns: ColumnProps[];
  rows: any[];
  onRowClick: (row: any) => void;
  onRowDoubleClick: (row: any) => void;
}

export default function Table({
  columns,
  rows,
  onRowClick,
  onRowDoubleClick,
}: TableProps) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns?.map(column => (
              <th
                key={column.key}
                style={{ textAlign: column.align || 'left' }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick(row)}
              onDoubleClick={() => onRowDoubleClick(row)}
            >
              {columns.map(column => (
                <td
                  key={column.key}
                  style={{ textAlign: column.align || 'left' }}
                >
                  {column.format
                    ? column.format(row[column.key])
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
