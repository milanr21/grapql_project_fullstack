import React from "react";
import { GiUnstableProjectile } from "react-icons/gi";

const Header = () => {
  return (
    <nav className="navbar py-3 bg-blue-400 pl-2 navbar-expand-lg navbar-light bg-light">
      <div className="container text-white flex flex-row ">
        <a className="navbar-brand  flex flex-row gap-4 " href="/">
          <GiUnstableProjectile fontSize={30} />
          <p className="text-3xl  font-semibold">Project Management</p>
        </a>
      </div>
    </nav>
  );
};

export default Header;
