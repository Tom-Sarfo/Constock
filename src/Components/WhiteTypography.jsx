import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// export const WhiteTypography = styled(Typography)((props) => ({
//   color: "#ffffff",
//   fontSize: props.small === true ? 16 : 22,
//   fontWeight: "bold",
// }));

// const MyStyledButton = styled('button')((props) => ({
//   backgroundColor: props.myBackgroundColor,
// }));

export const WhiteTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "medium" && prop !== "large"
})(({ medium, large }) => ({
  color:  "#ffffff",
  fontSize: large ? 26 : medium ? 22 : 16,
  fontWeight: "bold",

}));