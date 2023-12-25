
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {

  const { user, signOutt } = useAuth();

  const handleSignOut = () => {
    signOutt()
      .then(() => { })
      .catch(error => {
        console.error(error)
      })
  }

  const navLinks = <>

    <NavLink className="focus:bg-slate-800 px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/'>Home</NavLink>
    <NavLink className="focus:bg-slate-800 px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/courses'>Tasks</NavLink>
    <NavLink className="focus:bg-slate-800 px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/gallery'>Services</NavLink>
    <NavLink className="focus:bg-slate-800 px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/gallery'>Contact</NavLink>
    {!user && <NavLink className="focus:bg-slate-800 px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/signUp'>Sign Up</NavLink>}


  </>
  return (
    <div className="navbar  bg-[#15151580]  max-w-screen-2xl fixed z-10 bg-lime-600 px-2 lg:px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        <div className="flex gap-2 items-center text-xl font-bold text-white">
          <Link to="/"><img className="h-10 lg:h-12 rounded-full" src="https://i.ibb.co/vLDL8fs/task-logo.png" alt="" /></Link>
          <h2>Soul<span className="text-red-600">tech</span> </h2>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


      <div className="navbar-end gap-3">


        <input className="bg-slate-100 p-2 rounded-md w-20 lg:w-48 h-8 lg:h-10" placeholder="Search" type="search" name="" id="" />
        {
          user && <div className="dropdown  dropdown-end items-center gap-2 px-1  rounded-md">
            <button className="" tabIndex={0}><img className="h-8 lg:h-11 w-9 lg:w-11 rounded-full  " src={user.photoURL} alt="" /></button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-90 text-white rounded-box w-52 ">
              <p className="text-center">{user.displayName}</p>

              <Link className="flex justify-center" to="dashboard/myProfile"><button className=" border-t border-white border-b ">Dashboard</button></Link>

              <div className="mt-1 flex items-center justify-center gap-1">
                <button onClick={handleSignOut} > Sign out</button>
                <MdOutlineLogout></MdOutlineLogout>
              </div>

            </ul>
          </div>
          // <h2 className="text-slate-100 text-center text-sm lg:text-lg font-medium lg:font-medium">{user.displayName}</h2>

        }
        {
          user ?
            <div className="flex items-center gap-1"></div>
            :
            <Link to='/signIn'>
              <button className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white w-[100px]  btn-outline mr-2 duration-300 ">Sign in</button>
            </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;

