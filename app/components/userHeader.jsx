import { FiAlignJustify } from "react-icons/fi";
export default function UserHeader({ isOpen, toggleSidebar }) {
  return (
    <>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              className="flex items-center space-x-3 rtl:space-x-reverse"
              onClick={toggleSidebar}
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <FiAlignJustify></FiAlignJustify>
              </span>
            </button>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
