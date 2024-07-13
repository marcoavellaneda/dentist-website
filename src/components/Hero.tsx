import heroBackground from '../assets/mobile-background-hero.png';
import HeroBtns from './HeroBtns';

function Hero() {
  return (
    <div className="relative w-full h-[96%] z-0 pb-1 min-[400px]:pb-24">
      <img
        src={heroBackground}
        alt="Background"
        className="absolute object-cover object-center w-full max-h-full "
      />
      <div className="relative pt-72 text-white top-28">
        <h1 className="text-4xl pl-16 sm:text-10xl md:text-5xl lg:text-6xl font-bold leading-tight min-[400px]:pt-44 ">
          +500 <br /> Atendimentos <br />realizados
        </h1>
      </div>
      <div className='relative'>
        <HeroBtns/>
        <img className='absolute z-20 w-0 min-[400px]:w-10 ml-52 mt-4' src="src/assets/mobile-scroll.png " alt="" />
      </div>
    </div>
  );
}

export default Hero;
