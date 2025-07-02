import { cn } from "@/src/lib/utils";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn("w-full max-w-[1440px] mx-auto px-2 lg:px-4", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
