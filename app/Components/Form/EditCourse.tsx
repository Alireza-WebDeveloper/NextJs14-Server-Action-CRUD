'use client';
import { asyncEditCourse } from '@/app/Helpers/Course';
import { CourseType } from '@/app/Models/Course';
import { ChangeEvent, FormEvent, useTransition, useState } from 'react';
import { toast } from 'react-toastify';
import { Dispatch, SetStateAction } from 'react';
const EditCourse = ({
  selectCourse,
  setIsOpen,
}: {
  selectCourse: CourseType;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // State Select Course(Edit)
  const [title, setTitle] = useState(selectCourse.title);
  const [isPending, startTransition] = useTransition();
  // Edit Course Submit
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = { title, id: selectCourse.id };
      await asyncEditCourse(data);
      toast.success('edit course successfully');
      setIsOpen(false);
    } catch (error: any) {
      toast.error('failed edit course');
    }
  };
  return (
    <form
      className="mt-2 flex flex-col relative space-y-3"
      onSubmit={handleSubmitForm}
    >
      <input
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          startTransition(() => setTitle(e.target.value))
        }
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:capitalize"
        placeholder="add course..."
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="inline-flex capitalize justify-center rounded-md border border-transparent bg-green-100 px-5 py-2.5 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      >
        accept
      </button>
    </form>
  );
};

export default EditCourse;
