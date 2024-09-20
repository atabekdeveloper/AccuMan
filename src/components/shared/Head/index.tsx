import { UserPlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useActions } from 'src/hooks';

interface IHead {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Head: React.FC<IHead> = ({ searchQuery, onSearchChange }) => {
  const { pathname } = useLocation();

  const { toggleModal } = useActions();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  const clearSearch = () => {
    onSearchChange('');
  };
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-4 bg-white rounded-md shadow">
      <h1 className="text-xl font-semibold text-gray-700 capitalize">{pathname.substring(1)}</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="relative max-sm:w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md pr-7 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
        <Button variant="contained" color="primary" size="large" onClick={() => toggleModal(true)}>
          <UserPlusIcon />
        </Button>
      </div>
    </div>
  );
};
