// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <nav className="bg-white shadow-md w-full fixed top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//           {/* Logo (hidden when mobile nav is open) */}
//           <div
//             className={`text-2xl font-bold text-indigo-600 transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <Link href="/">Bharat Pharma</Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="space-x-6 hidden md:flex">
//             <Link href="/" className="text-gray-700 hover:text-indigo-600">
//               Home
//             </Link>
//             <Link
//               href="/services"
//               className="text-gray-700 hover:text-indigo-600"
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-indigo-600"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Hamburger Icon */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(true)}>
//               <MenuIcon fontSize="large" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* AnimatePresence handles exit animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Side Panel */}
//             <motion.div
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
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/services"
//                     className="text-gray-700 hover:text-indigo-600"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="text-gray-700 hover:text-indigo-600"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </motion.div>

//             {/* Overlay */}
//             <motion.div
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
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
    setLoading(true);
  };

  // Loader triggers after pathname changes
  useEffect(() => {
    if (!pathname) return;

    if (loading) {
      const timer = setTimeout(() => setLoading(false), 700); // loader smooth delay
      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  // useEffect(() => {
  //   if (isOpen || loading) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isOpen, loading]);

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

          <div className="space-x-6 hidden md:flex">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setLoading(true)}
            >
              Services
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
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-indigo-600"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
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

      {/* Loader Component */}
      <Loader loading={loading} />
    </>
  );
}
