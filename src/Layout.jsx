import SideNavigation from "./Layouts/SideNavigation";
import Box from "@mui/material/Box";
import MainLayout from "./Layouts/MainLayout";
import SidePanel from "./Layouts/SidePanel";
import TopNavigation from "./Layouts/TopNavigation";
export default function Layout() {
  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        <TopNavigation
          badgeContent={17}
          userName="Kabute Grace"
          userAvatar=""
        />
      </Box>
      <Box
        sx={{
          borderRight: 1,
          borderColor: "border",
          paddingTop: "0.8rem",
          borderRadius: "5px",
        }}
        className="sideNavigation"
      >
        <SideNavigation />
      </Box>

      <Box className="mainBox">
        <>
          <MainLayout />
        </>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "25px",
        }}
        className="asideBox"
      >
        <SidePanel />
      </Box>
    </div>
  );
}
