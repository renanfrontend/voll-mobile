import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#bbbbbb'
    },
    blue: {
      500: '#0B3B90',
      800: '#3c4454'
    },
    white: '#f2f2f2',
    black: '#2c313c'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})