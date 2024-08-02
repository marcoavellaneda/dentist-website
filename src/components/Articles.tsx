import ArticleList from "./ArticleList";

function Articles() {
  return (
    <div className="pt-4 pb-80">
      <img className="absolute  mt-12 right-1 h-[45%] w-[80%] " src="src/assets/layer-bg.png" alt="" />
      <img className="absolute  ml-4 w-[30%]" src="src/assets/article-icon.png" alt="" />

      <div className="mt-10 relative w-[100%] text-white font-bold">
        <h1 className="mt-16 ml-32">ARTIGOS</h1>
        <div className="absolute mt-[20px] ml-[10px] flex">
          <img className="relative ml-3 h-[275px] w-[175px] rounded-2xl" 
          src="src/assets/layer-card-test.png" alt="" />
          <img className="relative ml-3 h-[275px] w-[175px] rounded-2xl" 
          src="src/assets/layer-card-test.png" alt="" />
        </div>
        <ArticleList/>
      </div>
      <div className="absolute mt-72 pt-5 min-[400px]:pt-24 min-[400px]:pl-20 ml-80 flex"> 
        <img className="w-[20px] rotate-180"
        src="src/assets/btn-next.png" alt="" />
        <img className="w-[20px] ml-2"
        src="src/assets/btn-next.png" alt="" />
      </div>


    </div>

  );
}

export default Articles;
