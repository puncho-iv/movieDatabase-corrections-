// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from "../../images/logo.svg";
// import './headers.css';

// const headerNav = [
//   {
//     display: 'Home',
//     path: '/'
//   },
//   {
//     display: 'Movies',
//     path: '/movie'
//   },
//   {
//     display: 'TV Series',
//     path: '/tv'
//   }
// ];

// const Header = () => {
//   const [shrink, setShrink] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShrink(true);
//       } else {
//         setShrink(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const active = headerNav.findIndex(e => e.path === pathname);

//   return (
//     <div className={`header${shrink ? ' shrink' : ''}`}>
//       <div className="header__wrap container">
//         <div className="logo">
//           <img src={logo} alt="tMovies" />
//           <Link to="/">tMovies</Link>
//         </div>
//         <ul className="header__nav">
//           {headerNav.map((e, i) => (
//             <li key={i} className={`${i === active ? 'active' : ''}`}>
//               <Link to={e.path}>{e.display}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
