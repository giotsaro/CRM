import { useState, useEffect } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function AdminLayout() {
  const {user ,token } = useStateContext();

  // Check for authentication token
  if (!token) {
    return <Navigate to="/login" />;
  }
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const userName = 'name surname';

  

  // Array containing navigation items with icons
  const navItems = [
    { id: 1, text: 'Dashboard', href: '/dashboard', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    ) },
    { id: 2, text: 'Leads', href: '/leads', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

    ) },
    { id: 3, text: 'Clients', href: '/clients', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    

    ) },
    { id: 4, text: 'Users', href: '/users', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
    
    ) },
    { id: 5, text: 'Settings', href: '/settings', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

    ) },
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
    <>
   
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] ${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-700 shadow-lg z-10 transition-width overflow-y-auto`}>
        <div className="p-4">
          <button onClick={toggleSidebar} className="block cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 6h18"></path>
            </svg>
          </button>
        </div>
        
        <ul>
          {navItems.map(item => (
            <li key={item.id} className="p-4 hover:bg-gray-600 flex items-center space-x-4">
              <Link to={item.href} className="flex items-center space-x-4 text-gray-200">
                {item.icon}
                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      <div className={`flex flex-col flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} ${isDarkMode ? 'bg-gray-800 ' : 'bg-gray-100 '} transition-all`}>
        {/* Top bar */}
        <div className="fixed top-0 right-0 left-0 bg-gray-700 p-4 h-16 flex items-center justify-between z-20">
          <button onClick={toggleSidebar} className="block cursor-pointer md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <p className="text-gray-200 text-lg font-bold"></p>
          <p className="text-gray-200 text-lg font-bold">Welcome, {userName}!</p>
          <p className="text-gray-200 text-lg font-bold"><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<small>break</small>
</button></p>
          <div className="relative flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="block cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isDarkMode ? (
                  <path d="M12 3v1M12 20v1M4.93 4.93l.707.707M17.657 17.657l.707.707M1 12h1M22 12h1M4.93 19.07l.707-.707M17.657 6.343l.707-.707" />
                ) : (
                  <path d="M20.354 15.354A9 9 0 1 1 15.354 4.646 7 7 0 0 0 20.354 15.354z" />
                )}
              </svg>
            </button>

            <div className="relative">
              <button onClick={toggleProfileDropdown} className=" cursor-pointer flex items-center space-x-2">
                <p className="text-sm font-semibold text-gray-200">{userName}</p>
                <svg className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="px-4 py-2 text-gray-700 text-center">
                    {/* Profile dropdown content */}
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
          
        {/* Outlet container */}
        
        <div className= 'flex-1 overflow-y-auto pt-16 '  >
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}