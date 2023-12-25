
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';


const TodoListCard = ({ item, refetch }) => {

  const axiosPublic = useAxiosPublic();
  const handlongongoing = (id) => {
    const status = "ongoing"
    const newstatus = { status }
    axiosPublic.put(`/createTask/${id}`, newstatus)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sucessfully Move to Ongoing List",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
      })
  }
  const handleComplete = (id) => {
    const status = "complete"
    const newstatus = { status }
    axiosPublic.put(`/createTask/${id}`, newstatus)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sucessfully Move to Complete List",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch()
      })
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl m-4 h-[310px]">
        <div className="card-body ">
          <h2 className="card-title">Title: {item.title}</h2>
          <h2 className="text-xl">Category: {item.category}</h2>
          <h2 className="text-xl">DeadLine: {item.deadline.slice(8, 10)}-{item.deadline.slice(5, 7)}-{item.deadline.slice(0, 4)}</h2>
          <p>Description: {item.description.slice(0, 85)}</p>
          <div className="card-actions ">
            <button onClick={() => handleComplete(item._id)} className="btn btn-success w-[45%] md:w-[49%]">move to complete List</button>
            <button onClick={() => handlongongoing(item._id)} className="btn btn-neutral w-[45%] md:w-[47%]">move to Ongoing List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
