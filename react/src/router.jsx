import {createBrowserRouter , Navigate} from 'react-router-dom';
import  Login from './views/Login';
import NotFound from './views/notfound';
import AdminLayout from './components/AdminLayout';
import AgentLayout from './components/AgentLayout';
import GuestLayout from './components/GuestLayout';
import Users from './views/admin/Users';
import Dashboard from './views/admin/Dashboard';
import Leads from './views/admin/Leads';
import Clients from './views/admin/Clients';
import Settings from './views/admin/Settings';

const router = createBrowserRouter([


    {
        path: '/',
        element: <GuestLayout/>,
        children: [

            {
                path: '/',
                element: <Navigate to='login' />  
        
            },

            {
                path: '/login',
                element: < Login />  
        
            },


        ],
    },


    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='dashboard'/>

            } ,
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/leads',
                element: <Leads/>

            } ,
            {
                path: '/clients',
                element: <Clients/>

            } ,
            {
                path: '/users',
                element: <Users/>

            } ,
            {
                path: '/settings',
                element: <Settings/>

            } ,
           
            
        ],
    },
    
  

    
    {
        path: '*',
        element: <NotFound />
    }

])

export default router; 