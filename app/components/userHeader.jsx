export default function UserHeader({ isOpen, toggleSidebar }) {
  return (
    <>
      <div>
        {!isOpen && (
          <button
            className="bg-gray-600 text-white p-2 m-4 rounded-md"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        )}
        {isOpen && (
          <button
            className="bg-gray-600 text-white p-2 m-4 rounded-md"
            onClick={toggleSidebar}
          >
            Close Sidebar
          </button>
        )}
      </div>
    </>
  );
}
