function Footer() {
  return(
    <div className="absolute w-screen bg-[#202A2C] pt-4 mt-8">
      
      <div className="flex pb-4 mt-2">
        <img className=" w-20 z-10 m-2 ml-8" src="src/assets/logo_01_white.png" alt="" />
        <h1 className="text-white mt-10 font-semibold"> Doutora Sarah <br />Andria</h1>

        <div className="flex mt-14">
          <img className="w-[20px] h-[20px] ml-12 mt-4 mr-2" src="src/assets/whatsapp.png" alt="" />
          <img className="w-[20px] h-[20px] ml-0 mt-4 mr-3" src="src/assets/instagram.png" alt="" />

          <img className="w-[20px] h-[20px] ml-0 mt-4" src="src/assets/linkedin.png" alt="" />
        </div>
        

      </div>
      

    </div>
  );
}

export default Footer;