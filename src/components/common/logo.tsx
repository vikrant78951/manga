import { cn } from "@/src/lib/utils";
import { cursive } from "@/lib/fonts";
import { SITE_NAME } from "@/src/lib/constants";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <h1
      className={cn(
        className,
        "flex justify-center items-center text-2xl   tracking-wider",
        cursive.className,
      )}
    >
      {SITE_NAME}
    </h1>
  );
};

export default Logo;
