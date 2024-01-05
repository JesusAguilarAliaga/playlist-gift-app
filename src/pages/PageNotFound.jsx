import { Link } from "react-router-dom";

const PageNotFound = () => {
  
  return (
    <body className="flex flex-col h-screen justify-center items-center bg-gray-700">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-100">404</h1>
        <p className="text-2xl font-medium text-gray-400 mb-6">Page Not Found</p>
        <Link
          to="/"
          className="px-4 py-2 font-medium text-white bg-[#A284F6] rounded-md hover:bg-[#886AE2] transition-all duration-200 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </body>
  );
}
export default PageNotFound