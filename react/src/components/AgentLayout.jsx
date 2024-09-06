
import { useState, useEffect } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
export default function AgentLayout (){

    

    const {user ,token } = useStateContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Check for authentication token
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Dashboard', href: '/dashboard' },
    { id: 2, text: 'Leads', href: '/leads' },
    { id: 3, text: 'Clients', href: '/clients' },
    { id: 4, text: 'Reports', href: '/reports' },
    { id: 5, text: 'Settings', href: '/settings' },
  ];

  // Toggler function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      localStorage.setItem('isSidebarOpen', !prev);
      return !prev;
    });
  };

  // Toggler function for dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem('isDarkMode', !prev);
      return !prev;
    });
  };

  // Profile dropdown toggle
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('isSidebarOpen') === 'true';
    const savedDarkModeState = localStorage.getItem('isDarkMode') === 'true';

    setIsSidebarOpen(savedSidebarState);
    setIsDarkMode(savedDarkModeState);
  }, []);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className={`fixed h-full ${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-700 shadow-lg z-10 transition-width duration-300`}>
        <div className="p-4">
          <button onClick={toggleSidebar} className="block cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <p className={`text-gray-200 text-lg font-bold p-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>Sidebar</p>
        <ul>
          {navItems.map(item => (
            <li key={item.id} className="p-4 hover:bg-gray-600 flex items-center space-x-4">
              <svg className="h-6 w-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Example icon; replace with appropriate ones */}
                <path d="M12 20v-8M8 20v-4M4 20v-2M16 20v-6M20 20v-10"></path>
              </svg>
              <Link to={item.href} className={`text-gray-200 ${isSidebarOpen ? 'block' : 'hidden'}`}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex flex-col w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} ml-0 md:ml-${isSidebarOpen ? '64' : '20'}`}>
        <div className="bg-gray-700 p-4">
          <ul className="flex justify-between items-center">
            <li>
              <button onClick={toggleSidebar} className="block cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </li>
            <li>
              <p className="text-gray-200 text-lg font-bold">Welcome, Agent!</p>
            </li>
            <li className="relative flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="block cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isDarkMode ? (
                    <path d="M12 3v1M12 20v1M4.93 4.93l.707.707M17.657 17.657l.707.707M1 12h1M22 12h1M4.93 19.07l.707-.707M17.657 6.343l.707-.707" />
                  ) : (
                    <path d="M20.354 15.354A9 9 0 1 1 15.354 4.646 7 7 0 0 0 20.354 15.354z" />
                  )}
                </svg>
              </button>
              <div>
                <button onClick={toggleProfileDropdown} className="block cursor-pointer">
                  <img className="w-10 h-10 rounded-full" src="https://placehold.co/50x50?text=👤" alt="user-avatar" />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 justify-center items-center p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
