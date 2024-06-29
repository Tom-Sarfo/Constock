import { useState } from "react";
import Container from "@mui/material/Container";
import { WhiteTypography } from "../Components/Styled";
import { WalletCard } from "../Components/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHome,
  faChartSimple,
  faSackDollar,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import MenuCard from "../Components/MenuCard";

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
          display: "flex",
          borderBottom: 1,
          borderColor: "border",
          width: "100%",
          height: "103px",
          justifyContent: "center",
        }}
      >
        <WalletCard>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0.8rem",
              gap: "10px",
            }}
          >
            <WhiteTypography>Wallet Balance</WhiteTypography>
            <WhiteTypography medium>$50000</WhiteTypography>
          </div>
          <FontAwesomeIcon
            icon={faWallet}
            style={{ color: "white", marginTop: "-20px", fontSize: "40px" }}
            size="lg"
          />
        </WalletCard>
      </Box> 
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "border",
          paddingBottom: "0.8rem",
          paddingTop: "20px",
        }}
      >
        <MenuCard
          menuTitle="Dashboard"
          icon={faHome}
          active={activeMenu === "Dashboard"}
          onClick={() => handleMenuClick("Dashboard")}
        />
        <MenuCard
          menuTitle="Wallet"
          icon={faWallet}
          active={activeMenu === "Wallet"}
          onClick={() => handleMenuClick("Wallet")}
        />
        <MenuCard
          menuTitle="Constock Market"
          icon={faChartSimple}
          active={activeMenu === "Constock Market"}
          onClick={() => handleMenuClick("Constock Market")}
        />
      </Box>
      <Box
        sx={{
          height: "500px",
          borderBottom: 1,
          borderColor: "border",
          paddingTop: "20px",
        }}
      >
        <MenuCard
          menuTitle="Float Constock"
          icon={faSackDollar}
          active={activeMenu === "Float Constock"}
          onClick={() => handleMenuClick("Float Constock")}
        />
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <MenuCard
          menuTitle="Setting"
          icon={faGear}
          active={activeMenu === "Setting"}
          onClick={() => handleMenuClick("Setting")}
        />
      </Box>
    </Container>
  );
}
