import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      default: "#f0f0f0"
    },
    primary: {
      main: "#7e22ce"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif"
  }
})
