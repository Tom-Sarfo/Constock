import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7655FA",
    },
    secondary: {
      main: "#AD2828",
    },
    border: {
      main: "#CCCCCC",
      light: "#e3f2fd",
      dark: "#2D3134",
    },
  },
  spacing: 2,
  typography: {
    small: {
      fontSize: "14px",
      fontWeight: "regular",
    },
    medium: {
      fontSize: "20px",
    },
  },
});
