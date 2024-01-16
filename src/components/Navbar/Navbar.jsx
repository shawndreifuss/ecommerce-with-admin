import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <AdminPanelSettingsIcon />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <SearchIcon className='icon' />
        <GridViewIcon className='icon' />
        <SettingsOverscanIcon className='icon' />
        <div className="notification">
          <NotificationsIcon/>
          <span>1</span>
        </div>
        <div className="user"> 
        <img src="https://media.istockphoto.com/id/1006733242/photo/high-angle-view-of-people-on-street.webp?b=1&s=170667a&w=0&k=20&c=0ooL2KhGqZlXTa5JlpRYZfsOF9Z0SCNEPrYt3KLoavI=" alt="" />
        <span>Shawn</span>
        </div>
        <SettingsIcon className='icon' />
      </div>
    </div>
  )
}

export default Navbar