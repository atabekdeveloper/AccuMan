import React, { useState, useRef, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { useAuthProfileQuery } from 'src/store/index.endpoints';
import { useActions } from 'src/hooks';

import { Dropdown } from 'src/components/shared';

import logo from 'src/assets/logo.png';

export const Avatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { data: user, isError, error: loginError } = useAuthProfileQuery();

  const { enqueueSnackbar } = useSnackbar();

  const { signOut } = useActions();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = () => signOut();

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(`${(loginError as any).data.message}`, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
      signOut();
    }
  }, [isError]);
  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      buttonRef={buttonRef}
      btn={
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <img
            src={user?.image ?? logo}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-8 h-8 rounded-full"
          />
        </button>
      }
      content={
        <>
          <div className="p-4">
            <div className="flex items-center">
              <img
                src={user?.image ?? logo}
                alt={`${user?.firstName} ${user?.lastName}`}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{`${user?.firstName} ${user?.lastName}`}</h3>
                <p className="overflow-hidden text-sm text-gray-500 w-36 whitespace-nowrap">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Age:</span>
                <span className="text-sm text-gray-800">{user?.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Gender:</span>
                <span className="text-sm text-gray-800 capitalize">{user?.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Phone:</span>
                <span className="text-sm text-gray-800">{user?.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Birth Date:</span>
                <span className="text-sm text-gray-800">{user?.birthDate}</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              className="block w-full px-4 py-2 text-sm text-center text-white bg-red-500 hover:bg-red-600"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </>
      }
    />
  );
};
