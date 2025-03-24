import "./App.css";
import Layout from "./Layout";
import MobileLayout from "./Mobile/MobileLayout"
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Utils/Theme";
import { useMediaQuery } from "@mui/material";




export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? <MobileLayout /> : <Layout />}
      </ThemeProvider>
  );
}
