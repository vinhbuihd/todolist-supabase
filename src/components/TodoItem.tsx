"use client";

import { deleteTodo, toggleTodo } from "@/app/actions";

export function TodoItem({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div
        onClick={() => {
          toggleTodo(id);
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <button
          className="w-5 h-5 border rounded flex items-center justify-center"
          title="Toggle completed"
        >
          {completed ? "✅" : ""}
        </button>
        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </div>

      <button
        onClick={() => {
          deleteTodo(id);
        }}
        title="Xoá"
        className="text-red-500 hover:text-red-700 text-sm"
      >
        ✖
      </button>
    </div>
  );
}
