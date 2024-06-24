import { Box, Button, Typography } from "@mui/material";
import { WalletCard } from "./Components/WalletCard";
import { SmallWhiteFont } from "./Components/SmallWhiteFont";

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
          padding: "0.8rem", //make this value reusable
          borderRadius: "5px", //make this value reusable
        }}
        className="sideNavigation"
      >
        <WalletCard>
          <SmallWhiteFont style={{padding: "0.8rem" }} small>
            Wallet Balance
          </SmallWhiteFont>
        </WalletCard>
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
