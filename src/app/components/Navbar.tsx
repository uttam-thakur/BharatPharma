"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // arrow icon
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import { usePathname } from "next/navigation";
import { MdAccessTime, MdEmail, MdCall } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
    setLoading(true);
  };

  useEffect(() => {
    if (!pathname) return;
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 700);
      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 z-50">
        <div className="bg-gray-900 text-white text-sm py-3 px-4 z-50 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex-1 flex justify-center md:justify-start items-center space-x-2 ">
              <MdAccessTime className="w-7 h-7 text-red-600" />

              <span>Opening Hour: 9:00 am - 10:00 pm</span>
            </div>
            <div className="flex-1 flex justify-center items-center space-x-2">
              <MdEmail className="w-7 h-7 text-red-600" />

              <a
                href="mailto:carevancepharma@gmail.com"
                className="hover:underline text-center"
              >
                bharatpharma@gmail.com
              </a>
            </div>
            <div className="flex-1 flex justify-center md:justify-end items-center space-x-2">
              <MdCall className="w-7 h-7 text-red-600" />

              <a
                href="tel:+919817441724"
                className="hover:underline text-center"
              >
                +91 8670288140
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* <div
            className={`text-2xl font-bold text-indigo-600 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <Link href="/">Bharat Pharma</Link>
          </div> */}

<div
  className={`flex items-center gap-2 text-2xl font-bold text-indigo-600 transition-opacity duration-300 ${
    isOpen ? "opacity-0" : "opacity-100"
  }`}
>
  <Link href="/" className="flex items-center gap-2">
    <img
      src="/logo7.png"  // <-- replace with your logo path
      alt="Bharat Pharma Logo"
      className="h-16 w-18 object-contain"
    />
    Bharat Pharma
  </Link>
</div>


          <div className="space-x-6 hidden md:flex items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600">
                Services <ExpandMoreIcon fontSize="small" className="ml-1" />
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-md shadow-lg py-4 px-6 z-50 w-max max-w-[90vw]"
                  >
                    <div className="grid grid-flow-col grid-rows-3 gap-4 text-sm">
                      <Link
                        href="/facilated/a"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Medical Oxygen Gas & Cylinders
                      </Link>

                      <Link
                        href="/facilated/b"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Hospital Furniture
                      </Link>

                      <Link
                        href="/facilated/c"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Medical Equipments
                      </Link>

                      <Link
                        href="/facilated/d"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Orthopaedic Implants
                      </Link>

                      <Link
                        href="/facilated/e"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        General Surgical Instruments
                      </Link>

                      <Link
                        href="/facilated/f"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Medical Disposables
                      </Link>

                      <Link
                        href="/facilated/g"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Diagnostic Equipments
                      </Link>

                      <Link
                        href="/facilated/h"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Anaesthesia Product
                      </Link>

                      <Link
                        href="/facilated/I"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Height & Weight Scales
                      </Link>

                      <Link
                        href="/facilated/j"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Laboratory Products
                      </Link>

                      <Link
                        href="/facilated/k"
                        className="text-gray-700 hover:text-indigo-600"
                      >
                        Emergency Products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              suppressHydrationWarning
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <div className="text-xl font-semibold text-indigo-600 flex items-center justify-center w-full h-full">
                  Bharat Pharma
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <CloseIcon />
                </button>
              </div>
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-indigo-600"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {/* Services with Dropdown */}
                  <div
                    className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-indigo-600"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    <span>Services</span>
                    <ExpandMoreIcon
                      className={`ml-1 transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fontSize="small"
                    />
                  </div>

                  {/* Dropdown Items */}
                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="-ml-1 mt-1 -space-y-3 overflow-hidden"
                      >
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/a"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Medical Oxygen Gas & Cylinders
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/b"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Hospital Furniture
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/c"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Medical Equipment
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/d"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Orthopaedic Implants
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/e"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            General Surgical Instruments
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/f"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Medical Disposables
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/g"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Diagnostic Equipments
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/h"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Anaesthesia Product
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/I"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Height & Weight Scales
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/j"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Laboratory Products
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                        <li className="bg-white  px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            onClick={handleLinkClick}
                            href="/facilated/k"
                            className="text-gray-700 hover:text-indigo-600"
                          >
                            Emergency Products
                          </Link>
                          <hr style={{ border: "0.1rem solid gray " }}></hr>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-indigo-600"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              suppressHydrationWarning
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      <Loader loading={loading} />
    </>
  );
}
