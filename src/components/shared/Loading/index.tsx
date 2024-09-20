import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="relative w-full py-24 mb-10">
      <div className="absolute w-12 h-12 border-4 border-t-4 rounded-md border-primary animate-spin left-1/2"></div>
    </div>
  );
};
