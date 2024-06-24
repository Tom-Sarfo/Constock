import "./App.css";
import Layout from "./Layout";
import { theme } from "./Utils/Theme";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}
