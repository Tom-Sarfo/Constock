import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const WalletCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  backgroundColor: theme.palette.primary.main,
  height: 87,
  width: 241,
  // padding: '0.8rem',
}));

