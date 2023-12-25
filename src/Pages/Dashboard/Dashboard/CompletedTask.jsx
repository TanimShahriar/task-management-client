import { useQuery } from "@tanstack/react-query";

import CompletedTaskCard from "./CompletedTaskCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const CompletedTask = () => {
  const axiosPublic = useAxiosPublic()
  const { data: createTask = [], refetch } = useQuery({
    queryKey: ['createTask'],
    queryFn: async () => {
      const res = await axiosPublic.get('/createTask')
      return res.data
    }
  })
  const completelist = createTask.filter(card => card.status == "complete")
  return (
    <div className="bg-green-700 min-h-screen ">
      <div>
        <h2 className="text-center text-white text-xl font-bold mt-4">COMPLETED LIST</h2>
      </div>
      <div className="pb-4">
        {
          completelist.map(item => <CompletedTaskCard key={item._id} refetch={refetch} item={item}></CompletedTaskCard>)
        }
      </div>
    </div>
  );
};

export default CompletedTask;
