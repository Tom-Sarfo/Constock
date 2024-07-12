import SideNavigation from "./Layouts/SideNavigation";
import { Title } from "./Components/Styled";
import Box from "@mui/material/Box";
import WatchList from "./Layouts/WatchList";
import { useRef, useState } from "react";
import { scrollToWidth } from "./Utils/Constant";
import ArrowScroll from "./Components/ArrowScroll";
import TopNavigation from "./Layouts/TopNavigation";

export default function Layout() {
  const [scrollToPosition, setScrollToPosition] = useState(0);
  const WatchListContainerRef = useRef();

  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        <TopNavigation
        badgeContent={17} 
        userName="Kabute Grace" 
        userAvatar="" />
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

      <Box
        className="mainBox"
        sx={{
          padding: "1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <>
          <div>
            <Title label="Watch list" />
          </div>

          <WatchList
            style={{ position: "relative" }}
            innerRef={WatchListContainerRef}
          />
          <ArrowScroll
            scrollHandler={() =>
              scrollToWidth(
                100,
                scrollToPosition,
                setScrollToPosition,
                WatchListContainerRef
              )
            }
          />
        </>
      </Box>
      <Box sx={{ borderLeft: 1, borderColor: "border" }} className="asideBox">
        Aside box goes here...
      </Box>
    </div>
  );
}
