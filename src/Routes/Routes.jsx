import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/Signup/SignUp";
import SignIn from "../Pages/Signin/SignIn";
import Courses from "../Pages/Home/Courses/Courses";
import CourseDetails from "../Pages/Home/Courses/CourseDetails";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import CreateTask from "../Pages/Dashboard/Dashboard/CreateTask";
import AllTask from "../Pages/Dashboard/Dashboard/AllTask";
import UpdateTask from "../Pages/Dashboard/Dashboard/UpdateTask";
import UpdateTaskPage from "../Pages/Dashboard/Dashboard/UpdateTaskPage";
import Contact from "../Pages/Contact/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: '/courseDetails/:id',
        element: <CourseDetails></CourseDetails>

      },
      {
        path: '/contact',
        element: <Contact></Contact>

      },


    ]
  },

  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: "/dashboard/myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/dashboard/createTask",
        element: <CreateTask></CreateTask>
      },
      {
        path: "/dashboard/allTask",
        element: <AllTask></AllTask>
      },
      {
        path: "/dashboard/updateTask",
        element: <UpdateTask></UpdateTask>
      },
      {
        path: "/dashboard/updateTask/updateTaskPage/:id",
        element: <UpdateTaskPage></UpdateTaskPage>
      },

    ]
  }

]);
