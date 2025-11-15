import React, { useContext, useState } from "react";
import { Search, X } from "lucide-react";
import { ProductsContext } from "../context/Context";
const Searchbar = ({ parentClassName }) => {
  const { setAllProducts, OriginalProducts  } = useContext(ProductsContext);
  const [searchValue, setSearchValue] = useState("");


  function handleSearch() {
    if (searchValue.trim() === "") {
      setAllProducts(OriginalProducts);
      return;
    }

    const filtered = OriginalProducts.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

   setAllProducts(filtered)
  }

  function resetSearch() {
    setSearchValue("");
    setAllProducts(OriginalProducts);
  }
  return (
    <div className={parentClassName}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        value={searchValue}
        maxLength={20}
        placeholder="search..."
        className="h-10 w-64 rounded-md px-3 outline-none border-none text-black border-2 bg-orange-200 sm:w-52 cursor-pointer md:w-64 lg:w-80 "
      />
      <div
        onClick={handleSearch}
        className="h-10 bg-amber-600 rounded-md flex items-center px-2 cursor-pointer"
      >
        <Search className=" text-amber-50 " />

      </div>
        {searchValue !== "" && (
          <div
            onClick={resetSearch}
            className="h-10 bg-red-500 rounded-md flex items-center px-2 cursor-pointer ml-2"
          >
            <X className="text-white" />
          </div>
        )}
    </div>
  );
};

export default Searchbar;
