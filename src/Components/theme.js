import { Bloodtype } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5e875d",
    },
    secondary: {
      main: "#eab970",
      contrastText: "#ffffff",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // CSS
          borderRadius: 20,
          marginLeft: 10,
          width: 100,
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontWeight: "bold",
    },
  },
});

export default theme;
