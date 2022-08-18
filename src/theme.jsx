import createTheme from "@mui/material/styles/createTheme";

const PurpleTheme = createTheme({
  palette: {
    primary: {
      light: "#5A189A",
      main: "#240046",
      dark: "#10002B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#002855",
      main: "#001845",
      dark: "#001233",
      contrastText: "#fff",
    },
  },
});

export default PurpleTheme;
