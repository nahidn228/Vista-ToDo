import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCards from "@/components/module/task/TaskCards";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/hook/hooks";
import Navbar from "@/layout/Navbar";

import { selectTasks } from "@/redux/features/task/taskSlice";
import { useState } from "react";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredByTab = tasks.filter((task) => {
    if (filter === "Active") {
      return task.isCompleted === false;
    }
    if (filter === "Completed") {
      return task.isCompleted === true;
    }
    return true;
  });

  // Get the count of all tasks, active tasks, and completed tasks
  const allTasksCount = tasks.length;
  const activeTasksCount = tasks.filter((task) => !task.isCompleted).length;
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  const finalFilteredTasks = filteredByTab.filter((task) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const titleMatches = task.title.toLowerCase().includes(lowerCaseSearchTerm);
    const descriptionMatches = task.description
      .toLowerCase()
      .includes(lowerCaseSearchTerm);
    return titleMatches || descriptionMatches;
  });

  return (
    <div className="container mx-auto">
      {/* Title */}
  
      <div className="flex justify-center items-center py-4">
        {/* Use a single div that is a flex container and has w-full */}
        <div className="w-full ">
          <Tabs
            value={filter}
            onValueChange={(value) => setFilter(value)}
          
          >
            {/* The TabsList component should have the w-full class */}
            <TabsList className="w-full  py-7 px-4">
              <TabsTrigger value="All">All: {allTasksCount}</TabsTrigger>
              <TabsTrigger value="Active">
                Active: {activeTasksCount}
              </TabsTrigger>
              <TabsTrigger value="Completed">
                Completed: {completedTasksCount}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
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
        {finalFilteredTasks.map((task) => (
          <TaskCards key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
