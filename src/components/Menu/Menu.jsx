import { Link } from "react-router-dom";
import "./menu.scss";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to='/' className="listItem">
        <HomeIcon/>
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/'  className="listItem">
        <Person2Icon/>
        <span className="listItemTitle">Profile</span>
        </Link>
        </div>

        <div className="item">
        <span className="title">Main</span>
        <Link to='/' className="listItem">
        <HomeIcon/>
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/' className="listItem">
        <Person2Icon/>
        <span className="listItemTitle">Profile</span>
        </Link>
        </div>


    </div>
  );
};

export default Menu;
