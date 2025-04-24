import {
  Button,
  Navbar,
  TextInput,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  Avatar,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";

// import { FaMoon } from "react-icons/fa";


export default function Header() {
  const path = useLocation().pathname;
  
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <Navbar className="border-b-2">
      {/* <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          The Write Spot
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={CiSearch}
          className="hidden lg:inline"
        />
      </form> */}

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            The Write Spot
          </span>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={CiSearch}
            className="hidden lg:inline"
          />
        </form>
      </div>

      <Button
        className="w-12 h-10 lg:hidden flex items-center justify-center"
        color="gray"
        pill
      >
        <span className="text-xl">
          <CiSearch />
        </span>
      </Button>
      <div className="flex gap-3 md:order-2">
        {/* <Button
          className="w-12 h-10 hidden sm:inline border"
          color="white"
          pill
        >
          <FaMoon></FaMoon>
        </Button> */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold transition duration-200 hover:opacity-90" outline>
              Sign In
            </Button>
          </Link>
        )}

        <NavbarToggle></NavbarToggle>
      </div>

      <NavbarCollapse>
        <NavbarLink
          active={path === "/"}
          as={Link}
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
        >
          Home
        </NavbarLink>
        <NavbarLink
          active={path === "/about"}
          as={Link}
          to="/about"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
        >
          About
        </NavbarLink>
        <NavbarLink
          active={path === "/projects"}
          as={Link}
          to="/projects"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
        >
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
