import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/hook/hooks";
import { cn } from "@/lib/utils";
import { deleteTask, toggleComplete } from "@/redux/features/task/taskSlice";

import type { ITaskItem } from "@/types";

import { CalendarIcon, ClipboardPen, Trash2 } from "lucide-react";

interface IProps {
  task: ITaskItem;
}

const TaskCards = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-6 justify-between items-center border px-5 py-3 rounded-md">
      {/* Left Section: Checkbox and Task Details */}
      <div className="flex items-center gap-4 col-span-4">
        <Checkbox
          checked={task.isCompleted}
          onClick={() => dispatch(toggleComplete(task.id as string))}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1
              className={cn(
                { "line-through": task.isCompleted },
                "text-lg font-semibold"
              )}
            >
              {task.title}
            </h1>
          </div>
          <p className="text-gray-500 mt-1">{task.description}</p>
        </div>
      </div>
      <div className="col-span-1"></div>
      {/* Right Section: Due Date and Action Buttons */}

      <div className="col-span-1 grid grid-cols-1 gap-4 ">
        {/* The Due Date and Action buttons will now align to the left side */}
        <div className="col-span-2 flex items-center gap-4">
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          <p className="text-sm text-gray-400">
            {new Date(task.dueDate).toLocaleDateString()}
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" className="p-2">
              <ClipboardPen size={20} />
            </Button>
            <Button
              onClick={() => dispatch(deleteTask(task.id as string))}
              variant="ghost"
              className="p-2 text-red-500"
            >
              <Trash2 size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
