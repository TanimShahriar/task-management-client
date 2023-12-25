import { Link } from 'react-router-dom';

const UpdateTaskCard = ({ item }) => {

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Title : {item.title}</h2>

          <p>Status: {item.status}</p>
          <p>Category: {item.category}</p>
          <p>Deadline: {item.deadline.slice(8, 10)}/{item.deadline.slice(5, 7)}/{item.deadline.slice(0, 4)}</p>
          <p>Description:{item.description.slice(0, 150)}</p>
          <div className="card-actions justify-end">
            <Link to={`updateTaskPage/${item._id}`}>
              <button className="btn w-[100px] text-xl btn-error text-white">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskCard;