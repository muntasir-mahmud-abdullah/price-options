import { list } from "postcss";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = () => {
  const routes = [
    { path: "/", id: 1, name: "Home" },
    { path: "/about", id: 2, name: "About" },
    { path: "/services", id: 3, name: "Services" },
    { path: "/contact", id: 4, name: "Contact" },
    { path: "/profile", id: 5, name: "Profile" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-600 max-w-screen-xl px-4">
      <div onClick={() => setOpen(!open)} className="text-xl md:hidden">
        {open === true ? (
          <TfiClose></TfiClose>
        ) : (
          <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-gray-400
                    ${open === true ? "top-24" : "-top-60"}
                `}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
