import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-60" : "w-20 "
          } bg-lime-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <FaArrowCircleLeft
          src="./src/assets/control.png"
          className={`absolute cursor-pointer text-2xl text-white -right-3 top-9 w-7 
            rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Link to="/"><img
            src="https://i.ibb.co/vLDL8fs/task-logo.png"
            className={`cursor-pointer text-white w-10 rounded-full duration-500 ${open && "rotate-[360deg]"
              }`}
          /></Link>
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Soultech
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-300 min-h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;