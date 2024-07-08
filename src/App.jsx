import "./App.css";
import Layout from "./Layout";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Utils/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}
