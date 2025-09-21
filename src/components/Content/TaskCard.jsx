import { format } from "date-fns";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
const priorityColors = {
  HIGH: "border-l-red-500 bg-red-50/50",
  MEDIUM: "border-l-yellow-500 bg-yellow-50/50",
  LOW: "border-l-green-500 bg-green-50/50",
};

const priorityBadgeColors = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  LOW: "bg-green-100 text-green-700",
};

const categoryColors = {
  Work: "bg-blue-100 text-blue-700",
  Personal: "bg-green-100 text-green-700",
  Shopping: "bg-yellow-100 text-yellow-700",
  Health: "bg-purple-100 text-purple-700",
};

export function TaskCard({ task, onUpdate, onDelete }) {
  const handleToggleComplete = () => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    const updates = {
      status: newStatus,
      ...(newStatus === "completed"
        ? { completedDate: new Date().toISOString().split("T")[0] }
        : { completedDate: undefined }),
    };
    onUpdate(task.id, updates);
  };

  const isOverdue =
    task.status !== "completed" && new Date(task.dueDate) < new Date();
  const cardBorderColor = isOverdue
    ? "border-l-red-500 bg-red-50/30"
    : priorityColors[task.priority];

  return (
    <div
      className={`border rounded-lg shadow-sm p-4 transition-all hover:shadow-md border-l-4 ${cardBorderColor} ${
        task.status === "completed" ? "opacity-75" : ""
      }`}
    >
     
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3
          className={`font-semibold text-sm leading-tight ${
            task.status === "completed"
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>
        <div className="flex gap-1 shrink-0">
         
          <button
            onClick={handleToggleComplete}
            className="h-8 w-8 flex items-center justify-center rounded hover:bg-green-100"
          >
            <FaCheck />
          </button>
         
          <button className="h-8 w-8 flex items-center justify-center rounded hover:bg-blue-100">
            <MdEdit />
          </button>
      
          <button
            onClick={() => onDelete(task.id)}
            className="h-8 w-8 flex items-center justify-center rounded hover:bg-red-100"
          >
            <CiTrash />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {task.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              priorityBadgeColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              categoryColors[task.category]
            }`}
          >
            {task.category}
          </span>
        </div>

        <div className="text-xs text-gray-500">
          {task.status === "completed" && task.completedDate ? (
            <span className="text-green-600 font-medium">
              Completed: {format(new Date(task.completedDate), "MMM dd, yyyy")}
            </span>
          ) : (
            <span className={isOverdue ? "text-red-600 font-medium" : ""}>
              Due: {format(new Date(task.dueDate), "MMM dd, yyyy")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
