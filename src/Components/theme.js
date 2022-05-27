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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#eab970",
          "&.Mui-checked": {
            color: "#eab970",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textAlign: "center",
          fontSize: 18,
          transition: "all .5s",
          padding: "10px 15px",
          color: "#eab970",
          margin: "5px 10px",
        },
      },
    },
  },
});

export default theme;
