import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface ICustomTable {
  rows?: any[];
  columns: GridColDef[];
}

export const CustomTable: React.FC<ICustomTable> = ({ rows, columns }) => {
  return (
    <DataGrid
      className="bg-white rounded-md"
      rows={rows}
      columns={columns}
      hideFooter
      autoHeight
      disableColumnFilter
      disableEval
      disableVirtualization
      disableColumnResize
    />
  );
};
