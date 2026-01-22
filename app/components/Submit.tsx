"use client";
import { use } from "react";
import { useFormStatus } from "react-dom";

// use of useFormStatus to create a Submit button that is disabled while the form is submitting.

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      disabled={pending}
    >
      Submit
    </button>
  );
};
