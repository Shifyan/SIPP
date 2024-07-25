import { HiHome, HiChartSquareBar } from "react-icons/hi";
export default function SideBar({ isOpen }) {
  return (
    <>
      {isOpen ? (
        <div className="block bg-white shadow-md w-64 border-e-2 border-black">
          {/* Sidebar content */}
          <div className="px-4 py-6">
            <h2 className="text-lg font-semibold">Sidebar</h2>
            <ul className="mt-4">
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <HiHome className="mr-2" /> Home
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <HiChartSquareBar className="mr-2" /> Dashboard
                </a>
              </li>
              {/* Add more sidebar items here */}
            </ul>
          </div>
        </div>
      ) : (
        <div className="block bg-white shadow-md w-20 border-e-2 border-black"></div>
      )}
    </>
  );
}
