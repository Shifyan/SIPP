import { HiHome, HiChartSquareBar } from "react-icons/hi";
export default function SideBar({ isOpen }) {
  return (
    <>
      {isOpen ? (
        <div className="block  bg-white shadow-md w-64 border-e-2 border-black">
          <div className="px-4 py-6 border-2 border-black flex justify-center items-center">
            <div className="text-center">
              <div className="mb-10">
                <a href="/user/home" className="text-2xl font-bold">
                  <h1>SIPP</h1>
                </a>
              </div>
              <div className="flex justify-start items-start text-start">
                <ul className="text-4xl ms-2">
                  <li className="mb-3">
                    <a href="#" className="flex justify-center items-center">
                      <HiHome></HiHome>
                      <h1 className="text-lg">Home</h1>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="flex justify-center items-center">
                      <HiChartSquareBar></HiChartSquareBar>
                      <h1 className="text-lg">Keaktifan</h1>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="block bg-white shadow-md w-20 border-e-2 border-black">
          <div className="px-4 py-6 flex justify-center items-center">
            <div className="text-center">
              <div className="mb-10">
                <a href="/user/home" className="text-2xl font-bold">
                  <h1>SIPP</h1>
                </a>
              </div>
              <ul className="text-4xl ms-2">
                <li className="mb-3">
                  <a href="#">
                    <HiHome></HiHome>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#">
                    <HiChartSquareBar></HiChartSquareBar>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
