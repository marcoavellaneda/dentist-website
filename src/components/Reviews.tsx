import ReviewsList from "./ReviewList";

function Reviews() {
  return (
    <div className="mt-8">
      <div>
        <img className="absolute  ml-2 w-[370px] object-contain overflow-x-hidden"
        src="src/assets/mobile-layer-home-depo.png" alt="" />
        <h1 className="absolute mt-8 ml-24 text-white font-bold text-lg">Depoimentos</h1>
      </div>

      {<div className="absolute mt-[75px] flex w-[90%]">
        <img className="relative ml-3 h-[250px] w-[175px] rounded-2xl" 
        src="src/assets/layer-card-test.png" alt="" />
        <img className="relative ml-3 h-[250px] w-[175px] rounded-2xl" 
        src="src/assets/layer-card-test.png" alt="" />
      </div>}

      <div className="absolute mt-80 pt-5  ml-80 flex"> 
        <img className="w-[20px] rotate-180"
        src="src/assets/btn-next.png" alt="" />
        <img className="w-[20px] ml-2"
        src="src/assets/btn-next.png" alt="" />
      </div>

      <ReviewsList/>
    </div>    
  );
}

export default Reviews;