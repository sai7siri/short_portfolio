import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { IoMoon, IoSunny } from "react-icons/io5";

function MobileNav({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("dark") ?
   localStorage.getItem("dark") : "light"
);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [theme]);

  return (
    <div className="sm:hidden">

      <div className="flex items-center space-x-2">
        {/* darkmode */}

        <div>
         {theme === "dark" ? 
         
         <IoMoon className="text-xl" 
         onClick={()=> setTheme("light")}
         /> 
         
         : 
         
         <IoSunny className="text-xl" 
         onClick={()=> setTheme("dark")}
         /> 
         
         }
         
         </div>

        {/* hamburger */}
        <div onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>

      {/* menus */}

      <div
        className={`${
          isOpen ? "right-0" : "right-full"
        } fixed top-20  w-full h-[70%] bg-slate-100 dark:bg-black dark:text-secondary`}
      >
        <div
          className="absolute left-6 top-6 cursor-pointer text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 />
        </div>

        <div className="flex justify-center h-full items-center flex-col gap-6">
          {link.map((p) => (
            <div key={p.id}>
              <Link spy={true} offset={-70} smooth={true} id={p.id} to={p.path}
              duration={500}
              >
                <p className="text-xl font-medium hover:text-lime-600">
                  {p.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
