import { Search } from "lucide-react";
interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({  }) => {
  return (
    <div className="relative border border-gray-400 bg-transparent h-8 px-5 pr-16 rounded-full text-sm flex items-center cursor-pointer">
      <input
        className="text-sm focus:outline-0 "
        type="text"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute text-gray-400  right-2 ">
        <Search size={16}className=""/>
      </button>
    </div>
  );
};

export default SearchBar;
