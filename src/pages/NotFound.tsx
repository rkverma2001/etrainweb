import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-24 text-center">
    <p className="text-6xl font-bold text-[#008641]">404</p>
    <h1 className="mt-4 text-2xl font-semibold text-gray-800">Page not found</h1>
    <p className="mt-2 text-gray-500">
      The page you're looking for doesn't exist or has moved.
    </p>
    <div className="mt-6 flex gap-3">
      <Link
        to="/"
        className="px-5 py-2 rounded-lg bg-[#008641] text-white hover:opacity-90"
      >
        Go home
      </Link>
      <Link
        to="/courses"
        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        Browse courses
      </Link>
    </div>
  </div>
);

export default NotFound;
