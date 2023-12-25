import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import OngoingListCard from "./OngoingListCard";


const Ongoinglist = () => {
  const axiosPublic = useAxiosPublic();
  const { data: createTask = [], refetch } = useQuery({
    queryKey: ['createTask'],
    queryFn: async () => {
      const res = await axiosPublic.get('/createTask')
      return res.data
    }
  })
  const ongoinglist = createTask.filter(card => card.status == "ongoing")
  return (
    <div className="bg-yellow-400 min-h-screen">
      <div className="">
        <div>
          <h2 className="text-center text-white text-xl font-bold mt-4">ON GOING LIST</h2>
        </div>
        <div className="pb-4">
          {
            ongoinglist.map(item => <OngoingListCard key={item._id} refetch={refetch} item={item}></OngoingListCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Ongoinglist;