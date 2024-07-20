import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div className="pt-4 pb-80">
      <img className="absolute  mt-12 right-1 h-[400px] w-[300px] " src="src/assets/layer-bg.png" alt="" />
      <img className="absolute  ml-4 w-[30%]" src="src/assets/project-icon.png" alt="" />

      <div className="mt-20 relative w-[10%] left-[35%] text-white font-bold">
        PROJETOS
        <ProjectList/>
      </div>


    </div>
  );
}

export default Projects;