import { TodoForm } from "@/components/TodoForm";
import { addTodo } from "./actions";
import { TodoItem } from "@/components/TodoItem";
import { prisma } from "../../lib/prisma";

export default async function HomePage() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">📝 Todo App</h1>

      <TodoForm action={addTodo} />

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-3 rounded">
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}
