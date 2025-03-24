import { useState } from "react";
import Container from "@mui/material/Container";
import {
  faWallet,
  faHome,
  faChartSimple,
  faGear,
  faHandshake,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import MenuCard from "../../Components/MenuCard";


export default function SideNavigation() {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Handler to set the active menu
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <Container>
      <Box
        sx={{
          borderColor: "border",
          paddingBottom: "2rem",
          paddingTop: "20px",
        }}
      >
          <MenuCard
            menuTitle="Dashboard"
            icon={faHome}
            active={activeMenu === "MobiDashboard"}
            onClick={() => handleMenuClick("MobiDashboard")}
            routeTo="/mobi-dashboard"
          />
        <MenuCard
          menuTitle="Wallet"
          icon={faWallet}
          active={activeMenu === "Wallet"}
          onClick={() => handleMenuClick("Wallet")}
          routeTo="/wallet"
        />
        <MenuCard
          menuTitle="Constock Market"
          icon={faChartSimple}
          active={activeMenu === "Constock Market"}
          onClick={() => handleMenuClick("Constock Market")}
          routeTo="/mobi-market"
        />
        <MenuCard
          menuTitle="Sponsor"
          icon={faHandshake}
          active={activeMenu === "Sponsor"}
          onClick={() => handleMenuClick("Sponsor")}
          routeTo="/market"
        />
        <MenuCard
          menuTitle="Issue Constock"
          icon={faFileInvoiceDollar}
          active={activeMenu === "Issue Constock"}
          onClick={() => handleMenuClick("Issue Constock")}
          routeTo="/market"
        />
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <MenuCard
          menuTitle="Setting"
          icon={faGear}
          active={activeMenu === "Setting"}
          onClick={() => handleMenuClick("Setting")}
          routeTo="/settings"
        />
      </Box>
    </Container>
  );
}
