import { pink, yellow, blue, neutral } from "./colors"

export const lightTheme = {
  backgroundColor: neutral[100],
  primaryColor: pink[100], 
  secondaryColor: yellow,
  accentColor: blue,
  textColor: neutral[600],
  textColorInverted: neutral[100],
  linkHover: pink[200],
  mainGradient: `linear-gradient(to right, ${pink[100]} 0%, ${yellow} 100%)`,
}