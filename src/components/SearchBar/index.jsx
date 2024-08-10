import { useState } from "react";
import CardLayout from "../common/CardLayout";
import { AiOutlineSearch } from "react-icons/ai";
import useFindUsername from "../../utils/useFindUsername";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { fetchUsername } = useFindUsername();

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <CardLayout>
      <div className="flex items-center">
        <AiOutlineSearch size={'2em'} color="#056cdf"/>
        <input
          type="text"
          className="w-full p-2 rounded-lg border-none focus-visible:border-none focus-visible:outline-none  bg-transparent"
          placeholder="Search Github Username..."
          onChange={searchHandler}
        />

        <button
          type="button"
          className="bg-custom-tertiary text-white px-4 py-2 rounded-md"
          onClick={() => fetchUsername(search)}
        >
          Search
        </button>
      </div>
    </CardLayout>
  );
};

export default SearchBar;
