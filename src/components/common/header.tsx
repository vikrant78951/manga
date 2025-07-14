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
    <div
      className={cn(
        className,
        "fixed  top-0 left-0 right-0  z-10  bg-background/10 backdrop-blur-lg z-20 ",
      )}
    >
      <Wrapper className="flex items-center justify-between p-5  ">
        <Logo />
        <div className="flex items-center gap-4">
          <Nav />
          <SearchBar />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
