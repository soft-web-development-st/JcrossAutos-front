// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./dropdown.css";
// import { MenuItems } from "./MenuItems";
// import { AiOutlineLogout } from "react-icons/ai";

// const Dropdown = (props) => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//       setClick(!click);
      
//   };
//   return (
//     <div>
//       <ul
//         onClick={handleClick}
//         className={click ? "dropdown-menu clicked" : "dropdown-menu"}
//       >
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index} onClick={props.onshow} >
//               <Link
//                 className={item.cName}
//                 to={item.path}
//                 onClick={() => {
//                   setClick(false);
//                 }}
//               >
//                 <AiOutlineLogout className="icon" /> {item.title}
   
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;
