import { cn } from "@/src/lib/utils";
import { Search } from "lucide-react";
interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={cn(className, "cursor-pointer")}>
      <input type="search" className="hidden" />
      <Search />
    </div>
  );
};

export default SearchBar;
