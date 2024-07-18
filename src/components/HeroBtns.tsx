function HeroBtns () {
  return (
    <div className="relative mt-8 pl-8 pb-0 max-h-fit font-bold text-lg">
      <button
        className="rounded-lg pt-2 pb-2 pl-5 pr-5 border-white text-white border-2 bg-transparent hover:border-white hover:bg-[#202A2C] hover:text-white drop-shadow-2xl">
        Contato
      </button>
      <button 
        className=" ml-8 rounded-lg p-2.5 bg-white drop-shadow-2xl mb-6">
        Recomendações
      </button>
    </div>
  );
}

export default HeroBtns;