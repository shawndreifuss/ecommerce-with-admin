import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import NavItems from './NavItems'
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";


function LandingNavbar() {
  const { state } = useUser();
  const { user } = state;
  const { logout } = useUser();


  
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          The Answer
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
         <NavItems/>
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          {!user && (
            <>
          <Link to='/login'>
          <Button color={isScrolling ? "gray" : "white"} variant="text">
            Login
          </Button>
          </Link>
         
          <Link to='/register' >
            <Button color={isScrolling ? "gray" : "white"}>Sign Up</Button>
          </Link>
         </> 
         )}
        </div>
         
         {user && (
           <Link to='/landing' >
           <Button onClick={logout} color={isScrolling ? "gray" : "white"}>Logout</Button>
         </Link>
         )}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
              <NavItems user = {user}  />
          </ul>
          <div className="mt-6 flex items-center gap-4">
          {!user && (
            <Link to='/login'>
            <Button variant="text">Log in</Button>
            </Link>
            )}
            <Link to='/register' >
              <Button color="gray">Sign Up</Button>
            </Link>
            {user && (
           <Link to='/landing' >
           <Button onClick={logout} color={isScrolling ? "gray" : "white"}>Logout</Button>
         </Link>
         )}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default LandingNavbar;