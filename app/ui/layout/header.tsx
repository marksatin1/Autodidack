"use client";

import Logo from "../components/logo";
import Image from "next/image";
import { useState } from "react";
import InternalNavbarDropdown from "./internal-navbar-dropdown";
import { internalNavLinks } from "../../lib/data";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="px-4 py-8 flex justify-center items-center gap-2 lg:items-start">
      <Logo />
      <article className="flex sm:hidden">
        <Image
          src={showMenu ? "/icons/svg/Mountain.svg" : "/icons/svg/Mountain-Upside-Down.svg"}
          width={64}
          height={64}
          alt="Hamburger menu"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="main dropdown menu"
          className="w-6 cursor-pointer hover:scale-[1.2] duration-200"
        />
        {showMenu && <InternalNavbarDropdown links={internalNavLinks} />}
      </article>
    </header>
  );
}
