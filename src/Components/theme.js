import { createTheme } from "@mui/material/styles";

// App theme & overrides
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
  // Mui Componenet Overrides
  components: {
    // Button Style Override
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
    // Textfield Style Overrides
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#5e875d",
          fontWeight: "500",
          borderRadius: 40,
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
    // Checkbox Style Override
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
    // Tab Style Override
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
    // Table Style Override
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
    // Accordian Drop Down Override
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
