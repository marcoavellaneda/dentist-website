import Articles from "../components/Articles";
import Courses from "../components/Courses";
import Events from "../components/Events";
import Graduate from "../components/Graduate";
import Projects from "../components/Projects";
import Xp from "../components/Xp";

function Cv () {
  return (
    <div>
      <div className="bg-[#AFC8CB]">
        <button className="absolute ml-[68%] mt-[25%] rounded-lg p-1 pl-4 pr-4 bg-transparent border-white text-white border-2 drop-shadow-2xl mb-6 text-sm">Baixar CV</button>
        <Xp/>
        <Graduate/>
        <div className="flex mt-2 justify-center pb-8">
          <img className=" w-7" src="src/assets/mobile-scroll.png" alt="" />
        </div>
      </div>

      <div>
        
          <img className="absolute object-cover pb-12 opacity-90 h-[2000px] w-full" src="src/assets/bg-cv.png" alt="" />
        
        <Projects/>
        <div className="mt-8">
          <Courses/>
        </div>
        <div className="mt-8">
          <Articles/>
        </div>
        <div className="mt-8">
          <Events/>
        </div>
      </div>

      
      
    </div>
  );
}

export default Cv;