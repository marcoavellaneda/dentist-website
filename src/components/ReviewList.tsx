function ReviewsList (){
  return (
    <div>
      <div className="absolute mt-[75px] ml-3 min-[400px]:mt-[95px]">
      <img className=" w-[175px] min-[400px]:w-[215px] rounded-2xl"
      src="src/assets/pacient-1.png" alt="" />

        <div className="absolute w-[80px] mt-[60px] ml-[80px] min-[400px]:mt-[95px] min-[400px]:ml-[110px]">
          <img src="src/assets/rating.png" alt="" />
        </div>

        <div className="ml-4 mt-3  w-[150px] min-[400px]:w-[175px]">
          <h1 className="font-bold">Prótese total</h1>
          <span className="">Lorem ipsum dolor sit amet Sed do</span>
        </div>
      </div>

      <div className="absolute mt-[75px] ml-[199px] min-[400px]:mt-[95px] min-[400px]:ml-[239px]">
      <img className=" w-[175px] min-[400px]:w-[215px] rounded-2xl"
      src="src/assets/pacient-2.png" alt="" />

        <div className="absolute w-[80px] mt-[60px] ml-[80px] min-[400px]:mt-[95px] min-[400px]:ml-[110px]">
          <img src="src/assets/rating.png" alt="" />
        </div>

        <div className="ml-4 mt-2  w-[150px] min-[400px]:w-[175px]">
          <h1 className="font-bold">Prótese total</h1>
          <span className="">Lorem ipsum dolor sit amet Sed do</span>
        </div>
      </div>

    </div>
    
    
  );
}

export default ReviewsList