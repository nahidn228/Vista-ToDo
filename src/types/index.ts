export interface ITaskItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  isActive: boolean;
  priority: "low" | "medium" | "high";
}