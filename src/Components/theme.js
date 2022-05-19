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
          marginLeft: 20,
          width: 100,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#5e875d",
          fontWeight: "500",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "#ffffff",
          fontWeight: "500",
        },
      },
    },
  },
});

export default theme;
