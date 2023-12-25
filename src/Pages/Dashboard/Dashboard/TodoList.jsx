import { useQuery } from "@tanstack/react-query";
import TodoListCard from "./TodoListCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const TodoList = () => {
  const axiosPublic = useAxiosPublic();
  const { data: createTask = [], refetch } = useQuery({
    queryKey: ['createTask'],
    queryFn: async () => {
      const res = await axiosPublic.get('/createTask')
      return res.data
    }
  })
  const tolist = createTask.filter(card => card.status == "todo")
  return (
    <div className="bg-blue-400 min-h-screen">
      <div>
        <h2 className="text-center text-white text-xl font-bold mt-4">TO DO LIST</h2>
      </div>
      <div className="pb-4">
        {
          tolist.map(item => <TodoListCard key={item._id} refetch={refetch} item={item}></TodoListCard>)
        }
      </div>
    </div>
  );
};

export default TodoList;
