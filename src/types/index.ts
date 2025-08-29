export interface ITaskItem {
  id?: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  // isActive: boolean;
}
