import { Link } from "react-router";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-2">Oops! Page not found</p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        Go Back Home
      </Link>
    </div>
  );
}