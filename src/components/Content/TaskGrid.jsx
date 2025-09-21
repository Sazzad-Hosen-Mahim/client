import { FaPlusSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TaskCard } from "./TaskCard";

export function TaskGrid({
  tasks = [],
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
}) {
  return (
    <div className="space-y-6">
      {/* Search + Sort + Add */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-48 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="Priority">Priority</option>
          <option value="Due Date">Due Date</option>
          <option value="Category">Category</option>
        </select>

        {/* Add Task Button */}
        <button
          onClick={onAddTask}
          className="flex items-center bg-linear-to-r from-[#6876DF] to-[#7453AE] hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm"
        >
          <FaPlusSquare className="h-4 w-4 mr-2" />
          Add New Task
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdate={onUpdateTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tasks found</p>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filters or add a new task
          </p>
        </div>
      )}
    </div>
  );
}
