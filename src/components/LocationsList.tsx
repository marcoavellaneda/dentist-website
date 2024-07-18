function LocationsList () {
  return (
    <div>
    <div className="absolute mt-[85px] ml-3">
    <img className=" w-[175px] rounded-2xl"
    src="src/assets/location-1.png" alt="" />


      <div className="ml-4 mt-3  w-[150px]">
        <h1 className="font-bold">Helbor Offices
        Jardim das Colinas</h1>
        <div className="grid">
          <span className="">Ter a Sáb | 07h - 23h</span>
          <span className="mt-3">Jardim Aquarius</span>
        </div>
      </div>
    </div>

    <div className="absolute mt-[85px] ml-[199px]">
    <img className=" w-[175px] rounded-2xl"
    src="src/assets/location-2.png" alt="" />


      <div className="ml-4 mt-3  w-[150px]">
        <h1 className="font-bold">Consultório Sensorial</h1>
        <div className="grid">
          <span className="">Ter a Sáb | 08h - 17h</span>
          <span className="mt-3">Jardim Apolo</span>
        </div>
        
      </div>
    </div>


  </div>
  );
}

export default LocationsList;