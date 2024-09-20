import React, { useState, useRef } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { PopoverGroup } from '@headlessui/react';

import { navLinks } from 'src/data';

import { Dropdown } from 'src/components/shared';
import { Avatar } from '../Avatar';

import logo from 'src/assets/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { pathname } = useLocation();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
      >
        <Link to="/" className="-m-1.5 p-1.5">
          <img alt="Logo" src={logo} className="w-auto h-8" />
        </Link>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                pathname === link && 'text-primary'
              } text-sm font-semibold leading-6 text-gray-900`}
            >
              {title}
            </Link>
          ))}
        </PopoverGroup>
        <div className="flex gap-2">
          <Avatar />
          <Dropdown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            buttonRef={buttonRef}
            btn={
              <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none"
              >
                <Bars3Icon aria-hidden="true" className="w-6 h-6" />
              </button>
            }
            content={
              <ul className="py-1">
                {navLinks.map(({ id, link, title }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </nav>
    </header>
  );
};
