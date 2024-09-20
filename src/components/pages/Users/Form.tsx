import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';

import { CustomModal } from 'src/components/shared';
import { useActions, useAppSelector } from 'src/hooks';
import { useCreateUserMutation, useEditUserMutation } from 'src/store/index.endpoints';
import { TUserItem } from 'src/store/user/user.types';

export const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TUserItem>();

  const { enqueueSnackbar } = useSnackbar();

  const { modalShow, paramsForm } = useAppSelector((state) => state.user);

  const { toggleModal } = useActions();

  const [createUser, { isSuccess: createSuccess, isLoading: createLoading }] =
    useCreateUserMutation();
  const [editUser, { isSuccess: editSuccess, isLoading: editLoading }] = useEditUserMutation();

  const onSubmit: SubmitHandler<TUserItem> = (data) => {
    if (paramsForm) editUser(data);
    else createUser(data);
  };

  useEffect(() => {
    if (paramsForm) {
      for (const [key, value] of Object.entries(paramsForm as TUserItem)) {
        setValue(key as keyof TUserItem, value);
      }
    }
  }, [paramsForm]);

  useEffect(() => {
    if (createSuccess || editSuccess) {
      enqueueSnackbar(`${createSuccess ? 'Successfully added' : 'Successfully changed'}`, {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
      toggleModal(false);
    }
  }, [createSuccess, editSuccess]);

  return (
    <CustomModal open={modalShow} isLoading={createLoading || editLoading} reset={reset}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-lg gap-4 p-4 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">{paramsForm ? 'Edit User' : 'Add User'}</h2>

        {/* First Name */}
        <TextField
          {...register('firstName', { required: 'First Name is required' })}
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ''}
          fullWidth
        />

        {/* Last Name */}
        <TextField
          {...register('lastName', { required: 'Last Name is required' })}
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ''}
          fullWidth
        />

        {/* Age */}
        <TextField
          {...register('age', {
            required: 'Age is required',
            valueAsNumber: true,
            min: { value: 1, message: 'Age must be greater than 0' },
          })}
          label="Age"
          type="number"
          error={!!errors.age}
          helperText={errors.age ? errors.age.message : ''}
          fullWidth
        />

        {/* Email */}
        <TextField
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email format',
            },
          })}
          label="Email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
          fullWidth
        />

        {/* Phone */}
        <TextField
          {...register('phone', { required: 'Phone is required' })}
          label="Phone"
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ''}
          fullWidth
        />

        {/* Submit Button */}
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          className="w-full"
          loading={createLoading || editLoading}
        >
          {paramsForm ? 'Edit' : 'Add'}
        </LoadingButton>
      </form>
    </CustomModal>
  );
};
