import TaskCards from "@/components/module/task/TaskCards";
import { useAppSelector } from "@/hook/hooks";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";

const AllTasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCards task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
