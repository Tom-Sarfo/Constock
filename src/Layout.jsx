import SideNavigation from "./Layouts/SideNavigation";
import Box from "@mui/material/Box";
import MainLayout from "./Layouts/MainLayout";
export default function Layout() {
  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        Top navigation goes here...
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
        sx={{ borderLeft: 1, borderColor: "border" }}
        className="asideBox"
      ></Box>
    </div>
  );
}
