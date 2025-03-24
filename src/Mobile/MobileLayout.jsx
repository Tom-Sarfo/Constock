import { Box } from "@mui/material";
import TopNavigation from "./Layouts/TopNavigation";
import SideNavigation from "./Layouts/SideNavigation";
import { useState } from "react";
import CentralLayout from "./Layouts/CentralLayout";


const MobileLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = ()=>{
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <Box>
      <TopNavigation toggleMenu = {toggleMenu}/>
      {isMenuOpen && <SideNavigation />}
      <CentralLayout/>
    </Box>
  )
}

export default MobileLayout