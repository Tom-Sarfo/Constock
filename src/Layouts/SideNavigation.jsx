import Container from "@mui/material/Container";
import { WhiteTypography } from "../Components/WhiteTypography";
import { WalletCard } from "../Components/WalletCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

export default function SideNavigation() {
  return (
    <Container>
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
    </Container>
  );
}
