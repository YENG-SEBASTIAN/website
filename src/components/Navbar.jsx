import React from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import Sabs from '../assets/images/sabs.jpeg';


const navigation = [
  { name: 'Home', href: 'home-section', current: true },
  { name: 'About', href: 'about-section', current: false },
  { name: 'Service', href: 'services-section', current: false },
  { name: 'Skills', href: 'skills-section', current: false },
  { name: 'Projects', href: 'projects-section', current: false },
  // { name: 'My Blog', href: 'blog-section', current: false },
  { name: 'Contact', href: 'contact-section', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center">
                  <h2 className="text-white">YENG</h2>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      spy={true}
                      activeClass="bg-gray-900 text-white"
                      className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer', // Added cursor-pointer for pointer cursor
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={Sabs}
                      alt=""
                    />
                  </Menu.Button>
                </Menu>
              </div>
            </div>
          </div>

          {/* Responsive drawer menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  spy={true}
                  activeClass="bg-gray-900 text-white"
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer', // Added cursor-pointer for pointer cursor
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
