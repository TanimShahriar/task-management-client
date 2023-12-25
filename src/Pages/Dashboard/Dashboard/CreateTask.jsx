import { useForm } from "react-hook-form"

import Swal from "sweetalert2";
import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CreateTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const status = "todo"
    const opentime = moment().format('D-MMM-YY, h:mma')
    const email = user.email
    console.log(data)
    const newdata = { ...data, status, opentime, email }
    axiosPublic.post('/createTask', newdata)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New task create successfully",
            icon: "success"
          });
        }
        reset()
        // navigate('/dashboard/adminprofile')
      })

  }
  return (
    <div className="bg-lime-500 min-h-screen">
      <h2 className="text-center text-3xl py-5 font-semibold">Create New Task</h2>
      <div className="w-full  md:max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Task Title</span>
            </div>
            <input type="text" placeholder="Task Title"  {...register("title")} className="input input-bordered w-full " required />
          </label>

          <div className="flex gap-4 mt-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Task Deadline</span>
              </div>
              <input type="date" placeholder="Task Title"  {...register("deadline")} className="input input-bordered w-full " required />


            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Task Priority</span>
              </div>

              <select {...register('category')} className="select select-bordered w-full max-w-lg" required>
                <option disabled selected>Select a priority</option>
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
            <textarea type="text" placeholder="Task Description"  {...register("description")} className="input input-bordered h-[200px] w-full " required />
          </label>
          <input type="submit" className="btn w-full btn-[]" />

        </form>

      </div>
    </div>
  );
};

export default CreateTask;