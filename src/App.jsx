import { useContext } from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import EditTracker from './pages/Admin/EditTracker.jsx';
import AddTracker from './pages/Admin/AddTracker.jsx';
import { AppContext } from './context/AppContext.jsx';
import ViewReceipt from './pages/Admin/ViewReceipt.jsx';


const App = () => {

    const { token, receipt } = useContext(AppContext)


    return token ? (
        <div className='bg-[#f8f9fd]'>
                        <ToastContainer />
                        <Navbar />
                        <div className='flex items-start'>
                            <Sidebar />
                            <Routes>
                                {/*............... Admin Routes ..............*/}
                                <Route path='/' element={<Dashboard />} />
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/add-tracker' element={<AddTracker />} />
                                <Route path='/:id/edit' element={<EditTracker />} />
                        <Route path='/:id/view-receipt' element={<ViewReceipt />} />
                            </Routes>
                        </div>
                    </div>
    ) : (
        <div>
            <Login />
            <ToastContainer />
        </div>
    )
}

export default App