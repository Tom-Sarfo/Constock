import { Box } from "@mui/material";

export default function Layout() {
  return (
    <div className="layout">
      <Box sx={{ backgroundColor: 'red'}} className="topNavbar">Top navigation goes here...</Box>
      <Box sx={{ backgroundColor: 'green'}} className="sideNavigation">Side navigation goes here...</Box>
      <Box sx={{ backgroundColor: 'hotpink'}}>Main box goes here...</Box>
      <Box sx={{ backgroundColor: 'blue'}}>Aside box goes here...</Box>
    </div>
  );
}
