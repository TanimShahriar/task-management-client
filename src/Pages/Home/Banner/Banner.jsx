import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { fadeIn } from "../../../../public/variants"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (

    <div className="hero border-red-600 h-full lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/9wCZ1JP/banner11.jpg)' }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-2xl ">
          <h1
            data-aos="zoom-in"
            className="mb-5 text-5xl font-bold">Hello there,</h1>
          <p
            data-aos="zoom-in"

            className="mb-5">Welcome to The Event Hub, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries, we are your go-to destination for planning, tips, and inspiration for these cherished events.</p>

          <Link to="/dashboard"> <button data-aos="zoom-in" className="px-2 lg:px-5 py-1 lg:py-2 bg-lime-600 text-white cursor-pointer">Explore</button></Link>
        </div>
      </div>
    </div>


  );
};

export default Banner;