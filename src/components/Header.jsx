import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { Menu, Search } from "lucide-react";
import SideMenu from "./SideMenu";
import Links from "./Links";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <nav className="w-full py-5 bg-orange-950 flex  items-center justify-around gap-y-5  px-4">
        <span
          onClick={() => navigate("/")}
          className="text-white text-3xl font-semibold sm:text-2xl cursor-pointer"
        >
          Shopping cart
        </span>
        <Links parentClassName="gap-x-5 hidden sm:flex sm:gap-x-3 md:gap-x-7 lg:gap-x-15" />
        <Searchbar parentClassName="hidden items-center gap-x-2 sm:flex" />
        <div
          onClick={() => setDisplaySideMenu(true)}
          className="h-10 bg-amber-600 rounded-md items-center px-2 cursor-pointer flex sm:hidden"
        >
          <Menu className="text-amber-50  " />
        </div>
      </nav>
      {displaySideMenu && <SideMenu setStatuse={setDisplaySideMenu} />}
    </div>
  );
};

export default Header;
