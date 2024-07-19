import React from "react";

import { Link } from "react-scroll";

function Nav({ link }) {
  return (
    <div className="hidden sm:block">

     

        <div className="flex justify-center h-full items-center gap-6">
          {link.map((p) => (
            <div key={p.id}>
              <Link spy={true} offset={-70} smooth={true} id={p.id} to={p.path}
              duration={500}
              >
                <p className="text-md font-normal hover:text-pink-600 cursor-pointer">
                  {p.name}
                </p>
              </Link>
            </div>
          ))}
        </div>

  
    </div>
  );
}

export default Nav;
