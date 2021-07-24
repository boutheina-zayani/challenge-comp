
import './App.css';
import './style.css';
import Hd from './header.js';
import AboutMe from './about_me.js';
import Project from './projects.js';
import Contact from './contact.js';
import Footer from './footer.js';


function App() {
  var projects=[{proj:"projet1",paragraph:"hhhhhhh",img:"./images/proj1.jpg"},{proj:"projet2",paragraph:"hhhhhhh",img:"./images/proj2.jpg"},{proj:"projet3",paragraph:"hhhhhhh",img:"./images/proj3.jpg"},{proj:"projet4",paragraph:"hhhhhhh",img:"./images/proj4.jpg"}]
  return (
    <>
     <Hd/>
     <AboutMe/>
     <Project projects={projects}/>
     <Contact/>
     <Footer/>
     </>
   
  );
}

export default App;
