// import React from "react";
// import { RiLoginBoxLine } from "react-icons/ri";
// // import { Button } from 'primereact/button';
// import { AiOutlineSearch } from 'react-icons/ai';
// import './Navbar.css';
// // import { Image } from "primereact/image";

// import Logo from "../../assets/logo (1).png"
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// const CompNavbar = () => {
//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
//   }, []);

//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
//   return (
//     // <nav className="py-3 navbar-container shadow-lg">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex items-center justify-between h-16">
//     //       <div className="flex items-center space-x-10">
//     //         {/* Logo and Search Bar */}
//     //         <img src={Logo} alt="Logo" className="h-14" />
//     //         <div className="relative">
//     //           <input
//     //             type="text"
//     //             placeholder="Cari di sini ..."
//     //             className="px-4 py-2 md:mr-2 mb-2 md:mb-0 bg-gray-200 text-white rounded-md focus:outline-none focus:bg-gray-700 search-bar"
//     //           />
//     //           <span className="absolute top-3 right-4 text-gray-500 cursor-pointer">
//     //             <AiOutlineSearch />
//     //           </span>
//     //         </div>
//     //       </div>
//     //       {/* End of Logo and Search Bar */}

//     //       {/* Button */}
//     //       <div className="flex flex-col md:flex-row md:items-center">
//     //         <Link
//     //           to={"/login"}
//     //           type="button"
//     //           className="bg-gray-800 hover:bg-gray-700 px-4 py-2 text-sm text-white rounded-md focus:outline-none button-custom"
//     //         >
//     //           <div className="flex items-center">
//     //             <RiLoginBoxLine className="mr-2" />
//     //             <span>Masuk</span>
//     //           </div>
//     //         </Link>
//     //       </div>
//     //       {/* End of Button */}
//     //     </div>
//     //   </div>
//     //   {/* <hr /> */}
//     // </nav>
//     <>
//       <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
//         <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//             Material Tailwind
//           </Typography>
//           <div className="hidden lg:block">{navList}</div>
//           <Button variant="gradient" size="sm" className="hidden lg:inline-block">
//             <span>Buy Now</span>
//           </Button>
//           <IconButton
//             variant="text"
//             className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             {openNav ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </IconButton>
//         </div>
//         <MobileNav open={openNav}>
//           <div className="container mx-auto">
//             {navList}
//             <Button variant="gradient" size="sm" fullWidth className="mb-2">
//               <span>Buy Now</span>
//             </Button>
//           </div>
//         </MobileNav>
//       </Navbar>
//     </>
//   );
// };

// export default CompNavbar;