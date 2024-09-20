import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="relative px-6 pt-4 isolate lg:px-8">
      <div className="max-w-2xl py-32 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Test Task</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">Test task for Belcor companies.</p>
          <div className="flex items-center justify-center mt-5 gap-x-6">
            <Link
              to="/users"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
