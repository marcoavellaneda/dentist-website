function Graduate() {
  return (
    <div className="pb-8">
      <div className="pt-[10%] ml-8 flex">
        <img className="w-[15%]" src="src/assets/logo_formacao.png" alt="" />
        <h1 className="font-bold text-white w-[50%] pt-7 pl-3">FORMAÇÃO</h1>
      </div>

      <div className="ml-12 mt-4">
        <div className="">
          <div className="flex items-end">
            <h1 className="text-white font-bold text-xl">Odontologia</h1>
            <span className="text-white text-sm ml-3 bottom-0">2019 - 2024</span>
          </div>
          
          <h4 className="font-semibold text-sm">Universidade Estadual Paulista - Unesp</h4>

          <div className="w-[95%] mt-2 bg-[#202A2C] p-2 pl-3 rounded-xl">
            <span className="text-white font-thin text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Graduate;
