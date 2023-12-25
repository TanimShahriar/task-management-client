import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])


  const axiosPublic = useAxiosPublic();
  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses")
      return res.data;
    }
  })


  return (
    <div className="pt-16 bg-black bg-opacity-95 text-white">
      <Helmet>
        <title>Soultech | Task</title>
      </Helmet>
      <h2 className="ml-5  text-center text-3xl font-semibold ">All Tasks</h2>
      <div className="grid lg:grid-cols-3 gap-2 px-1 mt-5">
        {
          courses.map(data => <div key={data._id} className="  shadow-lg shadow-black p-4 rounded-lg ">

            <div className="space-y-4">
              <img className="h-40 lg:h-60 w-full lg:w-[550px]" src={data.image} alt="" />
              <h2 data-aos="zoom-in" className="card-title">{data.title}</h2>
              <p data-aos="zoom-in" className="text-sm">{data.description}</p>
              <div>
                <Link to={`/courseDetails/${data.id}`}><button data-aos="zoom-in" className="px-2 lg:px-5 py-1 lg:py-2 bg-lime-600 text-white cursor-pointer">Details</button></Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Courses;