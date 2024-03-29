import { createTheme } from "@mui/material";

const theme = createTheme({
    mode: 'dark',
    palette: {
      text: {
        primary: '#e2e2e2'
      },
      background: {
        default: '#242c49',
        light: '#324470',
        paper: '#29385c',
        sidebar: '#3e5385',
        sidebarHover: '#364978',
        sidebarSelected: '#373f70',
        dark: '#161a2b'
      },
      primary: {
        main: '#35418c',
        light: '#5e6cae',
        dark: '#212769'
      },
      secondary: {
        main: '#bcbc47',
        light: '#dce555',
        dark: '#8c7f35'
      },
      error: {
        main: '#a13a45',
        light: '#ce5461',
        dark: '#672c3a'
      },
      info: {
        main: '#427c9e',
        light: '#77a4c2',
        dark: '#255a75'
      },
      success: {
        main: '#3a9972',
        light: '#4aa984',
        dark: '#1b5032'
      },
      warm: {
        main: '##c27814',
        light: '##d29e33',
        dark: '#b0560a'
      },
    },
    typography: {
      allVariants: {
        fontFamily:"Open Sans",
        color: '#e2e2e2',
      },
      card: {
        fontWeight: 300,
        color: 'white'
      },
      title: {
        fontWeight: 800
      },
      bgText: {
        color: '#748db8'
      }
    },
  });

export default theme;