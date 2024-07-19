import Header from "./portfolio_2/Header"
import Hero from "./portfolio_2/Hero.jsx";
import Skills from "./portfolio_2/Skills.jsx"
import Experience from "./portfolio_2/Experience.jsx";
import Project from "./portfolio_2/Project.jsx";
import Contact from "./portfolio_2/Contact.jsx";
import Footer from "./portfolio_2/Footer.jsx"

function App() {

  const links = [
    {
       id: 1,
       name : "HOME",
       path : "home"
    },
    {
       id: 2,
       name : "PROJECTS",
       path : "projects"
    },
    {
       id: 3,
       name : "ABOUT",
       path : "about"
    },
    {
       id:4,
       name : "CONTACT",
       path : "contact" 
    }
 ]

  return (
    <div className="h-[2000px]">
    <Header link={links}/>
    <Hero />
    <Skills />
    <Experience />
    <Project />
    <Contact link={links}/>
    <Footer />
    </div>
  )
}

export default App
