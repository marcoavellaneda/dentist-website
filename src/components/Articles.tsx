import ArticleList from "./ArticleList";

function Articles() {
  return (
    <div className="pt-4 pb-80">
      <img className="absolute  mt-12 right-1 h-[45%] w-[80%] " src="src/assets/layer-bg.png" alt="" />
      <img className="absolute  ml-4 w-[30%]" src="src/assets/article-icon.png" alt="" />

      <div className="mt-20 w-[10%] relative left-[35%] text-white font-bold">
        ARTIGOS
        <ArticleList/>
      </div>


    </div>

  );
}

export default Articles;
