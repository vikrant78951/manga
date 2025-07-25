import { cn } from "@/src/lib/utils";
import { NAVIGATIONS } from "@/src/lib/constants";
import type { NavigationItem } from "@/src/lib/defination";
import Link from "next/link";
import { headers } from "next/headers";

const NavItem = ({
  item,
  currentPath,
}: {
  item: NavigationItem;
  currentPath: string;
}) => {
  const isActive = currentPath === item.path;

  return (
    <li className="">
      <Link
        href={item.path}
        className={cn(
          "font-light transition-colors  flex items-center p-1 px-2 rounded text-foreground/70",
          " hover:text-white ",
          isActive && "text-white font-semibold   ",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
};

const Nav = async ({ className }: { className?: string }) => {
  const headersList = await headers();
  const currentPath =
    headersList.get("x-invoke-path") ?? headersList.get("x-pathname") ?? "/";

  return (
    <nav className={cn(className, "flex mx-6 gap-4")}>
      {NAVIGATIONS.map((item) => (
        <NavItem key={item.path} item={item} currentPath={currentPath} />
      ))}
    </nav>
  );
};

export default Nav;
