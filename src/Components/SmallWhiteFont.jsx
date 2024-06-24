import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const SmallWhiteFont = styled(Typography)({
  color: "#ffffff",
  fontSize: (props) => props.small ? '14px' : '22px',
  fontWeight: 'bold',
});

