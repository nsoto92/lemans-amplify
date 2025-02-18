import { createTheme } from '@mui/material/styles';

// From zmo Digital Design Guidelines
const corePallete = {
  mainColor: '#F88644',
  darkGrey: '#4A4A4B',
  medGrey: '#A69F9F',
  lightGrey: '#EEE7E7',
  offWhite: '#FFFFFE',
};

const textPallete = {
  dark: corePallete.darkGrey,
  light: corePallete.lightGrey,
  med: corePallete.medGrey,
  error: '#d32f2f', //mui error light red
  warning: '#ed6c02', // mui warning orange
  info: '#0288d1', // mui info blue
};

// Application theme
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: corePallete.mainColor,
      // dark: will be calculated from palette.primary.main,
      contrastText: corePallete.offWhite,
    },
    secondary: {
      //light: '#0066ff',
      main: corePallete.medGrey,
      // dark: will be calculated from palette.secondary.main,
      contrastText: corePallete.mainColor,
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    //     light: '#ffa726',
    //     main: '#f57c00',
    //     dark: '#ef6c00',
    //     contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    background: {
      default: corePallete.offWhite,
      paper: corePallete.offWhite,
    },
    text: {
      primary: textPallete.dark,
      secondary: textPallete.med,
      disabled: textPallete.light,
    },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 18,

    h1: {
      fontWeight: 300,
      fontSize: 42,
    },

    h2: {
      fontWeight: 300,
      fontSize: 32,
    },

    h3: {
      fontWeight: 400,
      fontSize: 20,
    },

    h4: {
      fontWeight: 400,
      fontSize: 18,
    },

    h5: {
      fontWeight: 400,
      fontSize: 16,
    },

    h6: {
      fontWeight: 400,
      fontSize: 14,
    },

    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
    },

    subtitle2: {
      fontWeight: 300,
      fontSize: 20,
    },

    body1: {
      fontWeight: 300,
      fontSize: 17,
    },

    body2: {
      fontWeight: 300,
      fontSize: 13,
    },
    button: {
      fontSize: 16,
    },
  },
});

export default theme;