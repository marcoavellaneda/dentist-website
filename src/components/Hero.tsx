import heroBackground from '../assets/mobile-background-hero.png';
import HeroBtns from './HeroBtns';

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-clip ">
      <img
        src={heroBackground}
        alt="Background"
        className="absolute left-0 w-full object-cover object-center"
      />
      <div className="relative pt-96 text-white top-28">
        <h1 className="text-4xl pl-16 sm:text-10xl md:text-5xl lg:text-6xl font-bold leading-tight">
          +500 <br /> Atendimentos <br />realizados
        </h1>
      </div>
      <div className='relative'>
        <HeroBtns/>
      </div>
    </div>
  );
}

export default Hero;
