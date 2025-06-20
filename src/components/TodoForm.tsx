// app/components/TodoForm.tsx
"use client";

import { useRef } from "react";

export function TodoForm({ action }: { action: (formData: FormData) => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await action(formData);
        formRef.current?.reset(); // reset form sau khi submit
      }}
      className="flex gap-2 mb-4"
    >
      <input
        name="title"
        required
        placeholder="Thêm việc cần làm..."
        className="flex-1 border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Thêm
      </button>
    </form>
  );
}
