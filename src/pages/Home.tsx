import homeBackground from '../assets/mobile-background-home.png';
import Hero from "../components/Hero";

function Home () {
  return (
    <div>
      <h1 className="absolute z-10">test</h1>
      <Hero/>
      <div className="relative">
        <img
        src={homeBackground}
        alt="Background"
        className=""
      />
      </div>
    </div>
  );
}
export default Home;