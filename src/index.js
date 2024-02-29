import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 20,
  },

  palette: {
    primary: {
      main: "#FFA133",
      // light: "#757ce8",
      // dark: "#002884",
      contrastText: "white",
    },
    secondary: {
      main: "#00B3FF",
    },
  },
  breakpoints: {
    values: {
      xs: 260,
      sm: 360,
      md: 850,
      lg: 1160,
      xl: 1600,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
