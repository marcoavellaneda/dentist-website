import EventList from "./EventList";

function Events() {
  return (
    <div className="pt-4">
      <img className="absolute  mt-12 right-1 h-[45%] w-[80%] " src="src/assets/layer-bg.png" alt="" />
      <img className="absolute  ml-4 w-[30%]" src="src/assets/event-icon.png" alt="" />

      <div className="mt-20 w-[10%] relative left-[35%] text-white font-bold">
        EVENTOS
        <EventList/>
      </div>


    </div>
  );
}

export default Events;