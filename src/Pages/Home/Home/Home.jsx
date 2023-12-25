import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Educare Teaching | Home</title>
      </Helmet>
      <Banner></Banner>
      <Courses></Courses>
    </div>
  );
};

export default Home;