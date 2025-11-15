import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Links from "./Links";
import Searchbar from "./Searchbar";
import { getProducts } from "../services/api";

const SideMenu = ({setStatuse}) => {
  const [sideMenuStyles, setSideMenuStyles] = useState(
    "w-[75%] z-10 h-screen fixed top-0 right-0 bg-amber-800 sm:hidden"
  );
   function handleSideMenu(){
    setSideMenuStyles("hidden")
    setStatuse(false)
  }
  return (
    <div className={sideMenuStyles}>
      <X
        onClick={handleSideMenu}
        className="m-5 text-white  cursor-pointer"
      />
      <Searchbar parentClassName="flex gap-x-2 px-2 mt-15 " />
      <Links
        parentClassName=" flex flex-col m-auto items-center gap-y-20 mt-15 "
        childeClassname="text-slate-100 text-xl"
      />
    </div>
  );
};

export default SideMenu;
