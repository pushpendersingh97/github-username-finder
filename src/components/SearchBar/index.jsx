import { useState } from "react";
import CardLayout from "../common/CardLayout";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ fetchUsername }) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    await fetchUsername({ username: search });
  };

  return (
    <CardLayout>
      <div className="flex items-center">
        <AiOutlineSearch size={"2em"} color="#056cdf" />
        <input
          type="text"
          className="w-full p-2 rounded-lg border-none focus-visible:border-none focus-visible:outline-none bg-transparent"
          placeholder="Search Github Username..."
          onChange={searchHandler}
        />
        <button
          type="button"
          className="bg-custom-tertiary text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </CardLayout>
  );
};

export default SearchBar;
