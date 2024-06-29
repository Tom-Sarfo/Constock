import { Box } from "@mui/material";
import SideNavigation from "./Layouts/SideNavigation";
import { Title } from "./Components/Styled";

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

      <Box className="mainBox" sx={{padding: '1.2rem'}}><Title label="Watch list"/></Box>
      <Box sx={{ borderLeft: 1, borderColor: "border" }} className="asideBox">
        Aside box goes here...
      </Box>
    </div>
  );
}
