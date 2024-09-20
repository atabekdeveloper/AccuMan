import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';

import { useDeleteUserMutation } from 'src/store/index.endpoints';
import { LoadingButton } from '@mui/lab';

interface IUserDeleteDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export const UserDeleteDialog: React.FC<IUserDeleteDialog> = ({ open, setOpen, id }) => {
  const [deleteUser, { isSuccess, isLoading }] = useDeleteUserMutation();

  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => deleteUser(id);

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Successfully deleted', {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
      handleClose();
    }
  }, [isSuccess]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Delete User'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <LoadingButton onClick={handleOk} autoFocus loading={isLoading}>
          Yes
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
