import {fonts, fontSizes, spacing, borderRadius, boxShadow, lightColors, darkColors} from '@/themes/tokens'

export const lightTheme = {
  colors: lightColors,
  fonts: fonts,
  fontSizes: fontSizes,
  spacing: spacing,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
}

export const darkTheme = {
  colors: darkColors,
  fonts: fonts,
  fontSizes: fontSizes,
  spacing: spacing,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
}

export type Theme = typeof lightTheme | typeof darkTheme
