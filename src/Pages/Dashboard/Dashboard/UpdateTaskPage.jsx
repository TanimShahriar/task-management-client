import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const UpdateTaskPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: createTask = [] } = useQuery({
    queryKey: ['createTask'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/createTask`)
      return res.data
    }
  })
  const mytask = createTask.find(item => item._id == id)

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axiosPublic.put(`/taskUpdate/${id}`, data)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "New task create successfully",
            icon: "success"
          });
        }

        navigate('/dashboard/updateTask')
      })
  }
  return (
    <div className="min-h-screen bg-orange-500">
      <h2 className="text-3xl text-center font-semibold py-5">Update task</h2>
      <div className="w-full md:max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Task Title</span>
            </div>
            <input type="text" placeholder="Task Title" defaultValue={mytask.title}  {...register("title")} className="input input-bordered w-full " required />
          </label>

          <div className="flex gap-4 mt-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Task Deadline</span>
              </div>
              <input type="date" placeholder="deadline" defaultValue={mytask.deadline}  {...register("deadline")} className="input input-bordered w-full " required />


            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Task Piority</span>
              </div>

              <select {...register('category')} defaultValue={mytask.category} className="select select-bordered w-full max-w-lg" required>
                <option disabled selected>Select a piority</option>
                <option value="Low" >Low</option>
                <option value="moderate" >Moderate</option>
                <option value="high" >High</option>

              </select>
            </label>
          </div>
          <label className="form-control w-full mt-4 mb-8">
            <div className="label">
              <span className="label-text">Task Description</span>
            </div>
            <textarea type="text" placeholder="Task Description" defaultValue={mytask.description}  {...register("description")} className="input input-bordered h-[200px] w-full " required />
          </label>
          <input type="submit" className="btn w-full btn-[]" />

        </form>





      </div>
    </div>
  );
};

export default UpdateTaskPage;
