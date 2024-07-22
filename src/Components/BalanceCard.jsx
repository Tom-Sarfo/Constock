import Button from "@mui/material/Button";
import { WalletCard } from "./Styled";
import PropTypes from "prop-types";

function BalanceCard({
  cardTitle,
  cardFigure,
  cardAction,
  oneAction,
  smallText,
}) {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <WalletCard
        medium
        style={{
          backgroundColor: oneAction
            ? "rgb(98, 85, 245, 0.37)"
            : "rgb(55, 174, 177, 0.28",
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
          <p style={{ fontSize: "24px" }}>{cardTitle}</p>
          <p
            style={{
              fontSize: "36px",
              marginTop: "-20px",
              fontWeight: "bold",
            }}
          >
            ${cardFigure}
          </p>
          <p
            style={{
              marginTop: oneAction && "-40px",
              color: "#0C4D4F"
            }}
          >
            {smallText && smallText}
          </p>
        </div>
        {oneAction ? (
          <center>
            <Button
              variant="contained"
              sx={{
                width: "217px",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "#7655FA",
                },
              }}
              size="large"
            >
              {cardAction}
            </Button>
          </center>
        ) : (
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
        )}
      </WalletCard>
    </div>
  );
}

BalanceCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardFigure: PropTypes.string.isRequired,
  cardAction: PropTypes.string,
  oneAction: PropTypes.bool,
  color: PropTypes.string,
  smallText: PropTypes.string,
};
export default BalanceCard;
