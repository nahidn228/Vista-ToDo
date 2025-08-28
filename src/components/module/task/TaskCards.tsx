import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITaskItem } from "@/types";

import { ClipboardPen, Trash2 } from "lucide-react";

interface IProps {
  task: ITaskItem;
}

const TaskCards = ({ task }: IProps) => {
  return (
    <div className="grid grid-cols-6 justify-between items-center border px-5 py-3 rounded-md">
      {/* Left Section: Checkbox and Task Details */}
      <div className="flex items-center gap-4 col-span-4">
        <Checkbox />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">{task.title}</h1>
            <div
              className={cn("size-3 rounded-full p-0", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></div>
          </div>
          <p className="text-gray-500 mt-1">{task.description}</p>
        </div>
      </div>
      <div className="col-span-1"></div>
      {/* Right Section: Due Date and Action Buttons */}

      <div className="col-span-1 grid grid-cols-1 gap-4 ">
        {/* The Due Date and Action buttons will now align to the left side */}
        <div className="col-span-2 flex items-center gap-4">
          <p className="text-sm text-gray-400">{task.dueDate}</p>
          <div className="flex gap-2">
            <Button variant="outline" className="p-2 text-red-500">
              <Trash2 size={16} />
            </Button>
            <Button variant="outline" className="p-2">
              <ClipboardPen size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
