import Graduate from "../components/Graduate";
import Xp from "../components/Xp";

function Cv () {
  return (
    <div>
      <div className="bg-[#AFC8CB]">
        <button className="absolute ml-[68%] mt-[25%] rounded-lg p-1 pl-4 pr-4 bg-transparent border-white text-white border-2 drop-shadow-2xl mb-6 text-sm">Baixar CV</button>
        <Xp/>
        <Graduate/>
      </div>
      
    </div>
  );
}

export default Cv;