import Link from "next/link";
import React, { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { SiWechat } from "react-icons/si";
import { MdOutlineForum } from "react-icons/md";
import { HiDocument } from "react-icons/hi";

const DashboardMobileNav = ({ isOpen }) => {
  const [dropDownMenuState, setDropDownMenuState] = useState(false);

  return (
    <div>
      <div
        className={`font-sans fixed inset-0 z-10 flex items-end bg-black md:hidden bg-opacity-50 sm:items-center sm:justify-center ${
          isOpen ? "transform -translate-x-80 opacity-0" : "uk-animation-fade"
        }`}
      ></div>
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto dark:bg-gray-800 md:hidden bg-white ${
          isOpen && "transform -translate-x-64"
        } transition-all ease-in-out duration-150`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 font-sans"
            href="/dashboard"
          >
            PHEM
          </Link>
          <ul className="mt-6">
            <Link passHref href="/dashbaord">
              <li className="relative px-6 py-3 font-sans">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-brand-primary-400 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-800 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span className="ml-4">Dashboard</span>
                </a>
              </li>
            </Link>
          </ul>
          <ul>
            <Link passHref href="/dashboard">
              <li className="relative px-6 py-3 font-sans">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <BiUserPlus className="w-5 h-5" size={20} />
                  <span className="ml-4">Create Member</span>
                </a>
              </li>
            </Link>
            <Link passHref href="/dashboard/create-group">
              <li className="relative px-6 py-3 font-sans">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <ImUsers className="w-5 h-5" />
                  <span className="ml-4">Create Group</span>
                </a>
              </li>
            </Link>
            <Link passHref href="/dashboard">
              <li className="relative px-6 py-3 font-sans">
                <a className="inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer dark:text-gray-100">
                  <SiWechat className="w-5 h-5" />
                  <span className="ml-4">CoP Discussion Forum</span>
                </a>
              </li>
            </Link>
            <Link passHref href="/404">
              <li className="relative px-6 py-3 font-sans">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <MdOutlineForum className="w-5 h-5" />
                  <span className="ml-4">Group Discussion</span>
                </a>
              </li>
            </Link>
            <Link passHref href="/dashboard">
              <li className="relative px-6 py-3 font-sans">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <HiDocument className="w-5 h-5" />

                  <span className="ml-4">Document</span>
                </a>
              </li>
            </Link>

            {/* <li className="relative px-6 py-3 font-sans">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                aria-haspopup="true"
                onClick={() => setDropDownMenuState(!dropDownMenuState)}
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  <span className="ml-4">Dropdown Link</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {dropDownMenuState && (
                <motion.div
                  className="flex"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "tween", delay: 0, duration: 0.3 }}
                >
                  <ul
                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900 w-full font-sans"
                    aria-label="submenu"
                  >
                    <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 font-sans">
                      <a className="w-full" href="pages/login.html">
                        Login
                      </a>
                    </li>
                    <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                      <a className="w-full" href="pages/create-account.html">
                        Create account
                      </a>
                    </li>
                    <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 font-sans">
                      <a className="w-full" href="pages/forgot-password.html">
                        Forgot password
                      </a>
                    </li>
                    <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 font-sans">
                      <a className="w-full" href="pages/404.html">
                        404
                      </a>
                    </li>
                    <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 font-sans">
                      <a className="w-full" href="pages/blank.html">
                        Blank
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </li> */}
          </ul>
          <div className="px-6 my-6 font-sans">
            <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring ring-brand-primary-400 ring-opacity-50-purple font-sans transition duration-700">
              Create account
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardMobileNav;
