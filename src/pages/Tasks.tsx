import TaskCards from "@/components/module/task/TaskCards";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/hook/hooks";

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
      {/* ... other components */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <div className="flex items-center gap-5">
          <Input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[250px]"
          />
          <Tabs value={filter} onValueChange={(value) => setFilter(value)}>
            <TabsList className="grid grid-cols-3 w-full gap-5 m-2">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Active">Active</TabsTrigger>
              <TabsTrigger value="Completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div>
        <Select value={filter} onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
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
