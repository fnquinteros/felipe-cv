import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#BB2649",
      light: "#A2316B",
    },
    secondary: {
      main: "#524A7E",
      light: "#7B417E",
    },
    text: {
      primary: "#666666",
      secondary: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
