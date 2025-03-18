// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion, AnimatePresence } from "framer-motion";
// import Loader from "./Loader";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname();

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setLoading(true);
//   };

//   // Loader triggers after pathname changes
//   useEffect(() => {
//     if (!pathname) return;

//     if (loading) {
//       const timer = setTimeout(() => setLoading(false), 700); // loader smooth delay
//       return () => clearTimeout(timer);
//     }
//   }, [pathname, loading]);

//   return (
//     <>
//       <nav className="bg-white shadow-md w-full fixed top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//           <div
//             className={`text-2xl font-bold text-indigo-600 transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <Link href="/">Bharat Pharma</Link>
//           </div>

//           <div className="space-x-6 hidden md:flex">
//             <Link
//               href="/"
//               className="text-gray-700 hover:text-indigo-600"
//               onClick={() => setLoading(true)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/services"
//               className="text-gray-700 hover:text-indigo-600"
//               onClick={() => setLoading(true)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-indigo-600"
//               onClick={() => setLoading(true)}
//             >
//               Contact
//             </Link>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(true)}>
//               <MenuIcon fontSize="large" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               suppressHydrationWarning
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.3 }}
//               className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
//             >
//               <div className="flex justify-between items-center p-4 border-b">
//                 <div className="text-xl font-semibold text-indigo-600 flex items-center justify-center w-full h-full">
//                   Bharat Pharma
//                 </div>

//                 <button onClick={() => setIsOpen(false)}>
//                   <CloseIcon />
//                 </button>
//               </div>
//               <ul className="flex flex-col space-y-4 p-4">
//                 <li>
//                   <Link
//                     href="/"
//                     className="text-gray-700 hover:text-indigo-600"
//                     onClick={handleLinkClick}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/services"
//                     className="text-gray-700 hover:text-indigo-600"
//                     onClick={handleLinkClick}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="text-gray-700 hover:text-indigo-600"
//                     onClick={handleLinkClick}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               suppressHydrationWarning
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.4 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setIsOpen(false)}
//             />
//           </>
//         )}
//       </AnimatePresence>

//       {/* Loader Component */}
//       <Loader loading={loading} />
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // arrow icon
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import { usePathname } from "next/navigation";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div
            className={`text-2xl font-bold text-indigo-600 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <Link href="/">Bharat Pharma</Link>
          </div>

          <div className="space-x-6 hidden md:flex items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
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
                    className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50"
                  >
                    <Link
                      href="/facilated/a"
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                      onClick={() => setLoading(true)}
                    >
                      Medical Oxygen Gas & Cylinders
                    </Link>
                    <hr style={{ color: "blue", border: "1px solid " }}></hr>
                    <Link
                      href="/facilated/b"
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                      onClick={() => setLoading(true)}
                    >
                      Hospital Furniture
                    </Link>
                    <hr style={{ color: "blue", border: "1px solid " }}></hr>

                    <Link
                      href="/facilated/c"
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                      onClick={() => setLoading(true)}
                    >
                      Medical Equipment
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
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
                  {/* <Link
                    href="/services"
                    className="text-gray-700 hover:text-indigo-600"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link> */}

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
                      // <motion.ul
                      //   initial={{ height: 0, opacity: 0 }}
                      //   animate={{ height: "auto", opacity: 1 }}
                      //   exit={{ height: 0, opacity: 0 }}
                      //   transition={{ duration: 0.3 }}
                      //   className="ml-4 mt-2 space-y-2 overflow-hidden"
                      // >
                      //   <li>
                      //     <Link
                      //       href="/facilated/a"
                      //       className="block text-gray-700 hover:text-indigo-600"
                      //       onClick={handleLinkClick}
                      //     >
                      //       Medical Oxygen Gas & Cylinders
                      //     </Link>
                      //   </li>
                      //   <li>
                      //     <Link
                      //       href="/facilated/b"
                      //       className="block text-gray-700 hover:text-indigo-600"
                      //       onClick={handleLinkClick}
                      //     >
                      //       Hospital Furniture
                      //     </Link>
                      //   </li>
                      //   <li>
                      //     <Link
                      //       href="/facilated/c"
                      //       className="block text-gray-700 hover:text-indigo-600"
                      //       onClick={handleLinkClick}
                      //     >
                      //       Medical Equipment
                      //     </Link>
                      //   </li>
                      // </motion.ul>

                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-4 overflow-hidden"
                      >
                        <li className="bg-white rounded-lg shadow-md border px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            href="/facilated/a"
                            className="block text-gray-700 font-medium hover:text-indigo-600"
                            onClick={handleLinkClick}
                          >
                            Medical Oxygen Gas & Cylinders
                          </Link>
                        </li>
                        <li className="bg-white rounded-lg shadow-md border px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            href="/facilated/b"
                            className="block text-gray-700 font-medium hover:text-indigo-600"
                            onClick={handleLinkClick}
                          >
                            Hospital Furniture
                          </Link>
                        </li>
                        <li className="bg-white rounded-lg shadow-md border px-4 py-3 hover:bg-indigo-50 transition">
                          <Link
                            href="/facilated/c"
                            className="block text-gray-700 font-medium hover:text-indigo-600"
                            onClick={handleLinkClick}
                          >
                            Medical Equipment
                          </Link>
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
