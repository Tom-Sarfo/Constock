import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Chip } from "@mui/material";

export const WalletCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "medium",
})(({ medium, theme }) => ({
  display: "flex",
  alignItems: medium ? "" : "center",
  gap: medium ? "" : "50px",
  backgroundColor: medium ? "" : theme.palette.primary.main,
  height: medium ? 215 : 87,
  width: medium ? 359 : 241,
  borderRadius: "",
}));

export const ActiveBar = styled("div", {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, theme }) => ({
  display: !active && "none",
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

export const Title = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "medium" && prop !== "large",
})(({ medium, large }) => ({
  borderRadius: "6px",
  backgroundColor: "#F5F5F5",
  fontWeight: "bold",
  padding: large ? "0.6rem" : medium ? "0.5rem" : "0.4rem",
  fontSize: large ? 26 : medium ? 22 : 16,
}));

export const Status = styled(Chip, {
  shouldForwardProp: (prop) =>
    prop !== "outline" &&
    prop !== "squared" &&
    prop !== "rateColor" &&
    prop !== "statusColor" &&
    prop !== "small" &&
    prop !== "large",
})(({ outline, squared, rateColor, statusColor, small, large }) => ({
  backgroundColor: outline ? "#FFFFFF" : rateColor ? rateColor : statusColor,
  fontWeight: "bold",
  borderRadius: squared ? 5 : "",
  borderColor: rateColor ? statusColor : "",
  border: outline
    ? "2px solid #CCCCCC"
    : rateColor
    ? `2px solid ${statusColor}`
    : "",
  padding: large ? "0.6rem" : small ? "0.2rem" : "0.4rem",
  fontSize: large ? 26 : small ? 10 : 12,
  color: statusColor ? statusColor : "#FFFFFF",
  width: small && 66,
  height: small && 21,
}));

export const WatchListCardContainer = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "5px",
  height: 211,
  width: 246,
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#F5F5F5",
    opacity: 0.6,
    color: "#000000",
  },
}));
