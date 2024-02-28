import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import MainSidebar from "../components/Sidebars/MainSidebar";
import MainNavbar from "../components/Navbars/MainNavbar";
import routes from "../routes";
import { useUser } from "../context/UserContext";
import { Profile } from "../pages/Main";
import SinglePost from "../pages/Main/SinglePost";
import ViewProfile from "../pages/Main/ViewProfile";


export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  //   Get user State and pass as props to main navbar and sidebar 
  const { state } = useUser()
  const { user } = state
  
  
  
  


  return (
    <div className="min-h-screen bg-blue-gray-50/50">
       <MainSidebar 
        routes={routes}
        
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
      /> 
      <div className="p-4 xl:ml-80">
      <MainNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />  
        {/* Chat Button to add here */}
        {/* <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "main" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element}   />
              ))
          )}
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path='/viewing/post/:postId' element={<SinglePost />} />
          <Route path='/:userId/profile/:id' element={<ViewProfile />} />
        </Routes>
        <div className="text-blue-gray-600">
          
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
