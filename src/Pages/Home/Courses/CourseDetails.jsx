import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

const CourseDetails = () => {

  const axiosPublic = useAxiosPublic();

  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses")
      return res.data;
    }
  })

  const { id } = useParams();
  const details = courses.find(details => details.id == id);
  console.log(details);

  return (
    <div className="bg-black bg-opacity-95 text-white pt-14">
      <div className="shadow-lg p-5 rounded-lg mx-auto max-w-screen-2xl">
        <img className="h-[250px] lg:h-[70vh] w-full mx-auto" src={details.image} alt="" />
        <h2 className="w-full lg:w-60  mt-2 bg-lime-600 text-white font-medium py-1 px-2 text-2xl  ">Course Fee: {details.price}$</h2>
        <h2 className="text-3xl font-bold mt-5 mx-auto">{details.title}</h2>
        <h2 className="my-5">{details.description}</h2>
        <h2 className="my-5 bg-black bg-opacity-80 py-2 w-1/5 px-1">Instructor: {details.teacher}</h2>
        <div className="flex justify-between">

          <Link to='/'> <button className="flex items-center gap-3 px-1 lg:px-7 py-1 lg:py-2 bg-lime-600 text-white font-medium text-sm lg:text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to course</button></Link>

          <Link to='/pricing'> <button className="flex items-center gap-3 px-1 lg:px-7 py-1 lg:py-2 bg-lime-600 text-white font-medium text-sm lg:text-xl">Enroll now <BsFillArrowRightSquareFill className="text-xl"></BsFillArrowRightSquareFill></button></Link>

        </div>
      </div>
    </div>

  );
};

export default CourseDetails;