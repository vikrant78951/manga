import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import Nav from "@/src/components/common/nav";
import SearchBar from "@/src/components/common/search";
import Logo from "@/src/components/common/logo";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn(className, " top-0 left-0 right-0  z-10 ")}>
      <Wrapper className="flex items-center justify-between py-6">
        <Logo />
        <Nav />
        <SearchBar />
      </Wrapper>
    </div>
  );
};

export default Header;
