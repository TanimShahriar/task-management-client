import { Link } from 'react-router-dom';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const UpdateTaskCard = ({ item }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <div className=''>
      <div className=" bg-blue-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Title : {item.title}</h2>

          <p data-aos="zoom-in">Status: {item.status}</p>
          <p data-aos="zoom-in">Category: {item.category}</p>
          <p data-aos="zoom-in">Deadline: {item.deadline.slice(8, 10)}/{item.deadline.slice(5, 7)}/{item.deadline.slice(0, 4)}</p>
          <p data-aos="zoom-in">Description:{item.description.slice(0, 150)}</p>
          <div className="card-actions ">
            <Link to={`updateTaskPage/${item._id}`}>
              <button className="px-3 py-1 rounded-md bg-blue-800 text-white">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskCard;