import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/layout/Layout';
import { routes } from 'src/routes';
import { Login } from 'src/components/pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};
