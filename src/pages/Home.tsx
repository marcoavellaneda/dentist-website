import homeBackground from '../assets/mobile-background-home2.png';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Locations from '../components/Locations';
import Recomendations from '../components/Recomendations';
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
        className="opacity-60"
        />
      </div>

      <div className='ml-2 z-10 w-full'>
        <Reviews/>
      </div>

      <div className='ml-2 relative z-10 mt-[450px] min-[400px]:mt-[550px]'>
        <Recomendations/>
      </div>
        
      <div className="absolute z-0 mt-32">
        <img
        src={homeBackground}
        alt="Background"
        className="opacity-60"
        />
      </div>

      <div className='ml-2 relative z-10 mt-[870px] min-[400px]:mt-[1080px]'>
        <Locations/>
      </div>

      <div className='absolute z-30 mt-[400px]'>
        <Footer/>
      </div>
      

    </div>
  );
}
export default Home;