export const lightColors = {
  transparent: 'transparent',
  background: '#F8F9FA',
  text: '#2D3748',
  primary: '#3182CE',
  secondary: '#ED64A6',
  border: '#d6dce4',
  success: '#48BB78',
  error: '#F56565',
  warning: '#ECC94B',
  info: '#4299E1',
  buttonText: '#FFFFFF',
  placeholder: '#A0AEC0',
} as const

export const darkColors = {
  transparent: 'transparent',
  background: '#1A202C',
  text: '#E2E8F0',
  primary: '#63B3ED',
  secondary: '#F687B3',
  border: '#4A5568',
  success: '#68D391',
  error: '#FC8181',
  warning: '#F6E05E',
  info: '#46a5f3',
  buttonText: '#1A202C',
  placeholder: '#A0AEC0',
} as const

export const fonts = {
  primary: 'Inter_400Regular',
  primaryBold: 'Inter_700Bold',
  secondary: 'Arial',
} as const

export const fontSizes = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
} as const

export const spacing = {
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
} as const

export const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
} as const

export const boxShadow = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
  large: '0 8px 16px rgba(0, 0, 0, 0.2)',
} as const

export type ColorsKey = keyof typeof lightColors | keyof typeof darkColors
export type FontKey = keyof typeof fonts
export type FontSizeKey = keyof typeof fontSizes
export type SpacingKey = keyof typeof spacing
export type BorderRadiusKey = keyof typeof borderRadius
export type BoxShadowKey = keyof typeof boxShadow
