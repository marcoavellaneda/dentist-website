import CourseList from "./CourseList";

function Courses() {
  return (
    <div className="pt-4 pb-80">
      <img className="absolute  mt-12 right-1 h-[45%] w-[80%] " src="src/assets/layer-bg.png" alt="" />
      <img className="absolute  ml-4 w-[30%]" src="src/assets/course-icon.png" alt="" />

      <div className="mt-20 w-[10%] relative left-[35%] text-white font-bold">
        CURSOS
        <CourseList/>
      </div>


    </div>
  );
}

export default Courses;