import { asyncGetAllCourses } from './Helpers/Course';
import CourseList from './Components/Course/CourseList';
import AddCourse from './Components/Form/AddCourse';

// SSR
export const revalidate = 0;
export const dynamic = 'force-dynamic';
const Home = async () => {
  try {
    const courses = await asyncGetAllCourses();
    return (
      <div className="flex flex-col space-y-4 w-full mt-10 mx-auto container p-2">
        <AddCourse />
        {courses.length === 0 ? (
          <p className="text-2xl text-center font-bold dark:text-orange-400 text-orange-700">
            No courses have been added
          </p>
        ) : (
          <CourseList courses={courses} />
        )}
      </div>
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default Home;
