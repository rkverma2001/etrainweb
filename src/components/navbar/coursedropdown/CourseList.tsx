import React from "react";
import { Link } from "react-router-dom";

interface Course {
  name: string;
  slug: string;
}
interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="w-2/3 p-4 overflow-y-auto max-h-96">
      {courses.map((course) => (
        <Link to={course.slug}
          className="block px-2 py-2 hover:text-blue-600 hover:underline"
        >
          {course.name}
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
