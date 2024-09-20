import React from 'react';
import { Modal, ModalProps } from '@mui/material';
import { UseFormReset } from 'react-hook-form';

import { useActions } from 'src/hooks';

interface IModalState {
  isLoading: boolean;
  reset: UseFormReset<any>;
}

export const CustomModal: React.FC<IModalState & ModalProps> = (_props) => {
  const { open, reset, isLoading } = _props;

  const { setParamsForm, toggleModal } = useActions();

  const onCloseDrawer = () => {
    if (open) toggleModal(false);
    setParamsForm(null);
    reset();
  };

  React.useEffect(() => {
    if (!isLoading) onCloseDrawer();
  }, [isLoading]);

  return <Modal {..._props} onClose={onCloseDrawer} className="h-full py-6 overflow-y-scroll" />;
};
