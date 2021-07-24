
import './style.css';


function Project({projects}) {
  return (
    <section id="projects">
    <h2 class="text-important">Projects</h2>
    <div class="projects-container">   
    { projects.map((el,i)=> <div class="project-card" key={i}>     
         <img  src={el.img} alt="project" />
        <h3>{el.proj}</h3>   
        <p>{el.paragraph} </p> 
        <p><a href="kkkk.com">Github Link</a></p>
      </div>
   )}
    </div>
  </section>
  );
}

export default Project;

