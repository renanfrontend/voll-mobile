import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#bbbbbb'
    },
    blue: {
      500: '#3c4454',
      800: '#0B3B90'
    },
    white: '#2c313c',
    black: '#bbbbbb'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})