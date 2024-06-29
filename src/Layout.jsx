import { Box } from "@mui/material";
import SideNavigation from "./Layouts/SideNavigation";

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
          borderColor: "border", //make this value reusable
          paddingTop: "0.8rem",
          borderRadius: "5px", //make this value reusable
        }}
        className="sideNavigation"
      >
        <SideNavigation />
      </Box>
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="watchList"
      >
        Watch list box goes here...
      </Box>
      <Box className="mainBox">Main box goes here...</Box>
      <Box sx={{ borderLeft: 1, borderColor: "border" }} className="asideBox">
        Aside box goes here...
      </Box>
    </div>
  );
}
