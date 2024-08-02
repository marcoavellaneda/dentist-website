import heroBackground from '../assets/mobile-background-hero.png';
import HeroBtns from './HeroBtns';

function Hero() {
  return (
    <div className="relative w-full h-screen z-0 object-cover">
      <img
        src={heroBackground}
        alt="Background"
        className="absolute object-cover object-center w-full h-screen"
      />
      <div className="relative pt-[90%] top-28">
        <h1 className=" text-white text-4xl pl-8 sm:text-10xl md:text-5xl lg:text-6xl font-bold leading-tight ">
          +500 <br /> Atendimentos <br />realizados
        </h1>

        <HeroBtns/>

        <div className='w-full flex mt-8 justify-center'>
          <img className='z-20 w-7' src="src/assets/mobile-scroll.png " alt="" />
        </div>
    
      </div>

      
      
    </div>
  );
}

export default Hero;
