import { Typography } from "@material-tailwind/react";
import { useUser } from "../../context/UserContext";
import {
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    XMarkIcon,
    Bars3Icon,
  } from "@heroicons/react/24/solid";



  function NavItem() {
    const { state } = useUser();
    const { user } = state;

    return (
        <>
      <li>
        <Typography
          as="a"
          href='/blogs'
          variant="paragraph"
          className="flex items-center gap-2 font-medium"
        >
          <RectangleStackIcon className="h-5 w-5" />
              <span>Blogs</span>
        </Typography>
      </li>
       <li>
       <Typography
         as="a"
         href={user ? `/profile/${user._id}` : '/blogs'}
         variant="paragraph"
         className="flex items-center gap-2 font-medium"
       >
         <UserCircleIcon className="h-5 w-5" />
             <span>Profile</span>
       </Typography>
     </li>
      <li>
      <Typography
        as="a"
        href='/contact'
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        <CommandLineIcon className="h-5 w-5" />
            <span>Contact Us</span>
      </Typography>
    </li>
    </>
    );
  }

  export default NavItem;