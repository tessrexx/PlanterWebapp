import { CenterFocusStrong } from "@mui/icons-material";
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
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontWeight: "bold",
    },
  },
  shape: {
    borderRadius: "30px",
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // CSS
          borderRadius: 20,
          marginLeft: 5,
          width: 100,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#5e875d",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
