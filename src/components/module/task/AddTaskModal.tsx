/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hook/hooks";
import { cn } from "@/lib/utils";
import { addTask } from "@/redux/features/task/taskSlice";
import type { ITaskItem } from "@/types";

import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export function AddTaskModal() {
  const form = useForm<ITaskItem>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ITaskItem> = (data: ITaskItem) => {
    const toastId = toast.loading("Creating Task...");
    try {
      console.log(data);

      if (!data.description || !data.dueDate || !data.title) {
        return toast.error("Please Provide all data", { id: toastId });
      }
      dispatch(addTask(data));

      const id = uuidv4();

      const taskData = {
        ...data,
        id,
        isCompleted: false,
      };

      // 1. Get existing tasks from local storage
      const existingTasksString = localStorage.getItem("tasks");
      let existingTasks = [];

      if (existingTasksString) {
        existingTasks = JSON.parse(existingTasksString);
      }

      // 2. Add the new task to the array
      const updatedTasks = [...existingTasks, taskData];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      toast.success("Task is Created Successfully", { id: toastId });
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="text-white bg-[#15803D]">
            <Plus /> Add Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <DialogDescription>Fill up this form to Add Task</DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="my-1">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DueDate */}
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          // disabled={(date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Close </Button>
                </DialogClose>
                <Button type="submit" className="text-background">
                  Add Task
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
