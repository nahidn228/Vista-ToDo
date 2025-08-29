import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCards from "@/components/module/task/TaskCards";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import Navbar from "@/layout/Navbar"; // Assuming you want this here
import {
  selectActiveTasksCount,
  selectCompletedTasksCount,
  selectFilter,
  selectTasks,
  updateFilter,
} from "@/redux/features/task/taskSlice";
import { useState } from "react";

const AllTasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // Select the counts for each category
  const allTasksCount = useAppSelector((state) => state.allTasks.task.length);
  const activeTasksCount = useAppSelector(selectActiveTasksCount);
  const completedTasksCount = useAppSelector(selectCompletedTasksCount);

  const filteredByTab = tasks.filter((task) => {
    if (filter === "Active") {
      return task.isCompleted === false;
    }
    if (filter === "Completed") {
      return task.isCompleted === true;
    }
    return true;
  });

  const finalFilteredTasks = filteredByTab.filter((task) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesTitle = task.title.toLowerCase().includes(lowerCaseSearchTerm);
    const matchesDescription = task.description
      ?.toLowerCase()
      .includes(lowerCaseSearchTerm);
    return matchesTitle || matchesDescription;
  });

  return (
    <div className="container mx-auto">
      <div>
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 w-full gap-5 m-2">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All: {allTasksCount}
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Active"))}
              value="Active"
            >
              Active: {activeTasksCount}
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Completed"))}
              value="Completed"
            >
              Completed: {completedTasksCount}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[250px]"
      />
      <div className="flex justify-between items-center py-4 ">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <div className="flex items-center gap-5">
          <div>
            <AddTaskModal />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {finalFilteredTasks?.map((task) => (
          <TaskCards key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
