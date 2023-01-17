import { createTheme } from "@mui/material";
import { blue, pink } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: '#556b2f',
            dark: blue[700],
        },
        secondary: {
            light: pink[300],
            main: "#11cb5f",
            dark: pink[700],
        },
    },

})