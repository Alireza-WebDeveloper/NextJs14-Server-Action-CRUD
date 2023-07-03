'use client';

import { CourseResponse, CourseType } from '@/app/Models/Course';
import { FC, useState } from 'react';
import CourseItem from '../CourseItem';
import Modal from '../../Modal';
import EditCourse from '../../Form/EditCourse';

// Type
interface CourseListProps {
  courses: CourseResponse;
}

const CourseList: FC<CourseListProps> = ({ courses }) => {
  // State Modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectCourse, setSelectCourse] = useState<CourseType>(
    {} as CourseType
  );
  // Course Items
  const renderCourseItem = () => {
    return courses.map((course) => {
      return (
        <CourseItem
          setIsOpen={setIsOpen}
          key={course.id}
          course={course}
          setSelectCourse={setSelectCourse}
        />
      );
    });
  };
  return (
    <div className="flex flex-col space-y-3">
      {renderCourseItem()}
      {/* Modal */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* Form */}
        <EditCourse selectCourse={selectCourse} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

export default CourseList;
