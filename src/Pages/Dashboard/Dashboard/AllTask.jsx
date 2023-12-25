import CompletedTask from "./CompletedTask";
import Ongoinglist from "./OngoingList";
import TodoList from "./TodoList";







const AllTask = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <TodoList></TodoList>
      <Ongoinglist></Ongoinglist>
      <CompletedTask></CompletedTask>

    </div>
  );
};

export default AllTask;