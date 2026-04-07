const CourseStats = () => {
  return (
    <div className="max-w-6xl mx-auto -mt-10 bg-white shadow-md rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 text-center">
      <div>
        <p className="text-2xl font-bold text-green-600">6</p>
        <p className="text-gray-600">Modules</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-green-600">4.8</p>
        <p className="text-gray-600">Rating</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-green-600">15,000+</p>
        <p className="text-gray-600">Learners</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-green-600">Beginner</p>
        <p className="text-gray-600">Friendly</p>
      </div>
    </div>
  );
};

export default CourseStats;