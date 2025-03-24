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

export const NavContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '430px',
}));

export const MobileNav = styled('div')(() => ({
  height: '75px',
  display: 'flex',
  backgroundColor: '#D9D9D9'
}));

export const MobileTypography = styled(Typography)(() => ({
  fontWeight: 'Bold',
  fontSize: '26px',
  fontHeight: '700',
  lineHeight: '29.05px',
  textAlign: 'left',
  color: '#7655FA'
}));

export const CardButton = styled('div')(() => ({
  padding: '8px 20px',
  border: '4px, solid, #7655FA',
  borderRadius: '15px',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '29.05px',
  textAlign: 'left',

}));

export const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px'
}));

export const ToggleSwitch = styled('div')(() => ({
	width: '220px',
	margin: '35px auto',
	position: 'relative',
	borderRadius: '30px',
	background: '#fff'
}));

export const ToggleButton = styled('div')(() => ({
	padding: '10px 40px',
	cursor: 'pointer',
	background: 'transparent',
	border: '0',
	outline: 'none',
	position: 'relative',
	textAlign: 'center'
}));

export const StockMarketButton = styled('div')(() => ({
  width: "auto",
  padding: "6px 11px",
  top: "205px",
  borderRadius: "15px",
  border: "1px solid #D9D9D9",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "14.52px",
  textAlign: "center",
  color: "#7655FA"
}));