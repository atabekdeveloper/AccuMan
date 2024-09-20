import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';

import { Head, Loading, PaginationComponent } from 'src/components/shared';
import { CustomTable } from 'src/components/shared';
import { userColumns } from 'src/data';
import { useActions, useDebounce } from 'src/hooks';
import { useGetUsersQuery } from 'src/store/index.endpoints';
import { UserForm } from './Form';
import { TUserItem } from 'src/store/user/user.types';
import { UserDeleteDialog } from './Dialog';

export const Users: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const debounceValue = useDebounce(searchQuery);

  const { data: users, isFetching } = useGetUsersQuery({ skip: currentPage - 1, q: debounceValue });

  const { setParamsForm, toggleModal } = useActions();

  const handleParamsFormChange = (params: TUserItem) => {
    setParamsForm(params);
    toggleModal(true);
  };

  const handleSearchChange = useCallback((searchValue: string) => {
    setSearchQuery(searchValue);
  }, []);

  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    disableColumnMenu: true,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <div className="flex gap-2">
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => handleParamsFormChange(params.row as TUserItem)}
        >
          <PencilSquareIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            setUserId(params.row.id as number);
            setOpen(true);
          }}
        >
          <TrashIcon />
        </Button>
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-5">
      <Head searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      {isFetching && <Loading />}
      {!isFetching && <CustomTable rows={users?.data} columns={userColumns.concat(actionColumn)} />}
      <PaginationComponent
        page={currentPage}
        setCurrentPage={setCurrentPage}
        count={users?.total}
      />
      <UserDeleteDialog open={open} setOpen={setOpen} id={userId} />
      <UserForm />
    </div>
  );
};
