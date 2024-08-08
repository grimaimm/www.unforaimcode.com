import * as React from "react";
import SearchBox from "@/common/components/elements/SearchBox";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/common/constant/Menu";
import { AnimatePresence } from "framer-motion";

const Navigation = ({ isOpen }) => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  return (
    <AnimatePresence>
      {isOpen && (
        <nav className={`flex-col flex-grow pb-4 px-2 max-[414px]:px-1 lg:pb-0 ${isOpen ? 'flex ' : 'hidden'} lg:flex lg:flex-row max-md:min-h-screen`}>
          <div className="z-40 max-tabs:fade-in-top relative">
            <div className="space-y-5">
              <SearchBox />
            </div>
            <div className="border-t border-zinc-300 pb-2 block lg:hidden dark:border-zinc-700" data-testid="breakline"></div>
            <Menu list={filteredMenu} />
          </div>
        </nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
