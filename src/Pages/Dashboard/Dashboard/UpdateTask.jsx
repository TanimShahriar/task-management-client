import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UpdateTaskCard from "./UpdateTaskCard";



const UpdateTask = () => {
  const { user } = useAuth();
  const email = user?.email || ""
  const axiosPublic = useAxiosPublic();
  const { data: createTask = [] } = useQuery({
    queryKey: ['createTask'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/createTask`)
      return res.data
    }
  })
  const mytask = createTask.filter(item => item.email == email)
  return (
    <div className=" p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {
        mytask.map(item => <UpdateTaskCard key={item._id} item={item}></UpdateTaskCard>)
      }
    </div>
  );
};

export default UpdateTask;
