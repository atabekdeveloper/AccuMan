import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useAppSelector } from 'src/hooks';

import { Navbar } from './Navbar';
import { Footer } from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
  },
});

export const Layout: React.FC = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <ThemeProvider theme={theme}>
      <div className="max-w-full min-h-screen">
        <Navbar />
        <main className="flex-auto max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {token ? <Outlet /> : <Navigate to="/login" />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
