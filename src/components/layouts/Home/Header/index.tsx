import Logo from "@/components/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out",
        scroll && "bg-white shadow-md text-foreground"
      )}>
      <div
        className={cn(
          "container h-20 flex items-center justify-between transition-all duration-500 ease-in-out",
          scroll && "h-16"
        )}>
        <div>
          <Logo imgCls={cn("", scroll && "bg-primary p-1 rounded-full")} />
        </div>

        <div className="hidden lg:block">
          <Nav directionCls="flex items-center gap-8" linkCls="font-semibold" />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
