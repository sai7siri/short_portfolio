import React from "react";
import logo1 from "../assets/portfolio_2/book-store.jpg";
import logo2 from "../assets/portfolio_2/cozweb.jpg";
import logo3 from "../assets/portfolio_2/restaurant.jpg";
import logo4 from "../assets/portfolio_2/portfolio.jpg";

function Project() {
  const projects = [
    {
      id: 1,
      name: "Online Book Store",
      image: logo1,
    },
    {
      id: 2,
      name: "Resturant Web App",
      image: logo3,
    },
    {
      id: 3,
      name: "React.js + Tailwind",
      image: logo2,
    },

    {
      id: 4,
      name: " Personel Porfolio",
      image: logo4,
    },
  ];

  return (
    <div className="dark:bg-primary dark:text-secondary" id='projects'>
      
      <div className=" container ">
        {/* first row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-bold text-xl">FEATURED PROJECTS</h1>
            <p className="text-sm">Watch tutorial and practise more</p>
          </div>
          <div>
            <button className="py-1 px-3 bg-red-600 rounded-sm text-secondary">
              View all
            </button>
          </div>
        </div>

        {/* second row */}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {projects.map((p) => (
            <div key={p.id}>

              <div className="border p-2 md:p-4 w-[440px] md:w-full dark:bg-[#505050]">
                <img src={p.image} alt="not found" className="shadow-sm" />
              </div>

              <div>
               <p className="font-bold text-xl">{p.name}</p>
               <h1 className="text-red-700">Know more</h1>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
