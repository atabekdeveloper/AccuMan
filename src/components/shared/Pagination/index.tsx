import React from 'react';
import { Pagination } from '@mui/material';

interface IPaginationProps {
  count?: number;
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  variant?: 'text' | 'outlined';
}

export const PaginationComponent: React.FC<IPaginationProps> = ({
  count,
  page,
  setCurrentPage,
  variant = 'text',
}) => {
  return (
    <Pagination
      className="p-4 bg-white rounded-md"
      count={Math.ceil(count ? count / 6 : 1)}
      page={page}
      onChange={(_, value) => setCurrentPage(value)}
      variant={variant}
      color="primary"
    />
  );
};
