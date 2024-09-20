import React from 'react';

import logo from 'src/assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full bg-white top-full">
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <img src={logo} alt="Logo" className="w-auto h-8" />
          </div>

          <p className="mt-4 text-sm text-center text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
