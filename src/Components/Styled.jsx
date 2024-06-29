import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const WalletCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  backgroundColor: theme.palette.primary.main,
  height: 87,
  width: 241,
}));

export const ActiveBar = styled("div", {
    shouldForwardProp: (prop) => prop !== "active",
  })(({ active, theme }) => ({
  display: !active && 'none',
  backgroundColor: theme.palette.primary.main,
  height: 60,
  width: 5,
}));

export const WhiteTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "medium" && prop !== "large",
})(({ medium, large }) => ({
  color: "#ffffff",
  fontSize: large ? 26 : medium ? 22 : 16,
  fontWeight: "bold",
}));
