import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainSidebar from "../components/Sidebars/MainSidebar";
import MainNavbar from "../components/Navbars/MainNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
import routes from "../routes";

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //   Get user State and pass as props to main navbar and sidebar 
  
  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
       <MainSidebar 
        routes={routes}
        
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
      /> 
      <div className="p-4 xl:ml-80">
      <MainNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />  
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "singlepost" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element}   />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
