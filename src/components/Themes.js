export const lightTheme = {
  body: '#FCF6F4',
  text: '#DA291C',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '255, 255, 244',
  textRgba: '0,0,0',
}

export const DarkTheme = {
  body: '#DA291C',
  text: '#FCF6F4',
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: '218, 41, 28',
  bodyRgba: '0,0,0',
}

// You can also use these breakpoints after importing it and use it as breakpoints.sm
export const breakpoints = {
    sm: 20,//em
    md: 30,
    lg: 45,
    xl: 60,
    xxl:75,
  }
  
  export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
  }