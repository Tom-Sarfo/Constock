import Button from "@mui/material/Button";
import { WalletCard } from "./Styled";

function BalanceCard() {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <WalletCard
        medium
        style={{
          backgroundColor: "rgb(55, 174, 177, 0.28",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            paddingLeft: "2rem",
          }}
        >
          <p style={{ fontSize: "24px" }}>Fund balance</p>
          <p
            style={{
              fontSize: "36px",
              marginTop: "-20px",
              fontWeight: "bold",
            }}
          >
            $30000
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "123px",
              textTransform: "capitalize",
              bgcolor: "#FFFFFF",
              "&:hover": {
                bgcolor: "#AD2828",
                color: "#FFFFFF",
              },
            }}
            color="secondary"
          >
            Withdraw
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "123px",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#7655FA",
              },
            }}
          >
            Deposit
          </Button>
        </div>
      </WalletCard>
    </div>
  );
}

export default BalanceCard;
