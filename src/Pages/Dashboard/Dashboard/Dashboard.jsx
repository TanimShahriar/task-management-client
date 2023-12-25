import { Link, NavLink, Outlet } from "react-router-dom";
import { MdAnnouncement, MdCalendarMonth, MdEmail, MdHome, MdList, MdMenu, MdPeople, MdPeopleOutline, MdPerson, MdPlusOne } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsListTask } from "react-icons/bs";



const Dashboard = () => {


  return (


    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-[150px] lg:w-64 min-h-screen bg-slate-500">

        <div className="p-3 flex items-center gap-2 font-bold">
          <Link to="/"><img className="h-10 lg:h-10 rounded-full" src="https://i.ibb.co/vLDL8fs/task-logo.png" alt="" /></Link>
          <h2 className="text-lg">Soul<span className="text-red-800">tech</span> </h2>
        </div>

        <ul className="menu p-0 lg:p-2 font-semibold space-y-1">


          {/* shared content */}
          <div className="divider"></div>

          <li className="">
            <NavLink to="/">
              <MdHome className="text-xl"></MdHome>
              Home</NavLink>
          </li>

          <li className="">
            <NavLink to="/dashboard/myProfile">
              <ImProfile />
              My Profile</NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/createTask">
              <MdAddTask />
              Create Task</NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/allTask">
              <BsListTask />
              All Task</NavLink>
          </li>

          <li className="">
            <NavLink to="/dashboard/contact">
              <MdEmail></MdEmail>
              Contact</NavLink>
          </li>

        </ul>
      </div>


      {/* dashboard content */}
      <div className="w-56 lg:flex-1">
        <Outlet></Outlet>
      </div>

    </div>

  );
};

export default Dashboard;