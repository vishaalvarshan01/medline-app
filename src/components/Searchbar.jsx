import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { searchState } from "../context/state";

const Searchbar = () => {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <div className="flex flex-1 my-1 mx-auto rounded-3xl border-solid border-2 border-slate-900 w-[400px] px-2 py-1 h-10 text-center">
      <img src="./searchIcon.svg" alt="search-icon" className="w-6 mx-1" />
      <input
        placeholder="search our inventory ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-center w-full outline-none px-auto"
      />
    </div>
  );
};

export default Searchbar;
