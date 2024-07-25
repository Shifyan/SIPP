import { HiHome, HiChartSquareBar } from "react-icons/hi";
export default function SideBar({ isOpen }) {
  return (
    <>
      {isOpen ? (
        <div className="block p-5 bg-white shadow-md w-64 border-e-2 border-black">
          <div className="p-9 border-2 border-black flex justify-center flex-col">
            <a href="/user/home">
              <h1>SIPP</h1>
            </a>
            <div className="flex">
              <HiHome></HiHome>
              <HiChartSquareBar></HiChartSquareBar>
            </div>
          </div>
        </div>
      ) : (
        <div className="block bg-white shadow-md w-20 border-e-2 border-black">
          <div className="px-4 py-6 flex flex-col justify-center">
            <a href="#">
              <h1 className="text-lg font-semibold">SIPP</h1>
            </a>
            <ul className="mt-4 text-2xl font-bold">
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <HiHome className="mr-2" />
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <HiChartSquareBar className="mr-2" />
                </a>
              </li>
              {/* Add more sidebar items here */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
