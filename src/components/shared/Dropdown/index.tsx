import React, { useEffect, useRef, useCallback } from 'react';

interface IDropdown {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btn: React.ReactNode;
  content: React.ReactNode;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const Dropdown: React.FC<IDropdown> = React.memo(
  ({ isOpen, setIsOpen, btn, content, buttonRef }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !buttonRef.current?.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      },
      [setIsOpen, buttonRef],
    );

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, handleClickOutside]);

    return (
      <div className="relative inline-block text-left">
        {btn}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);
