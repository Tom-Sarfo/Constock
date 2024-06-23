import { Box } from "@mui/material";

export default function Layout() {
  return (
    <div className="layout">
      <Box sx={{ borderBottom: 2 }} className="topNavbar">
        Top navigation goes here...
      </Box>
      <Box sx={{ borderRight: 2 }} className="sideNavigation">
        Side navigation goes here...
      </Box>
      <Box sx={{ borderBottom: 2 }} className="watchList">
        Watch list box goes here...
      </Box>
      <Box className="mainBox">Main box goes here...</Box>
      <Box sx={{ borderLeft: 2 }} className="asideBox">
        Aside box goes here...
      </Box>
    </div>
  );
}
