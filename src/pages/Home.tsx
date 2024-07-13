import homeBackground from '../assets/mobile-background-home.png';
import Hero from "../components/Hero";
import Reviews from '../components/Reviews';

function Home () {
  return (
    <div>
      <h1 className="absolute z-10">test</h1>
      <Hero/>


      <div className="absolute">
        <img
        src={homeBackground}
        alt="Background"
        className=""
      />
      </div>


      <div className='absolute z-10 w-full'>
        <Reviews/>
      </div>
        
    </div>
  );
}
export default Home;